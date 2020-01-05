import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Fizzit"
        description="$5 for one carbon dioxide bottle"
        amount={500}
        token={token => this.props.handleToken(token)} //a callback function that gets called with the token that we recieve from Stripe
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

//export default Payments;

export default connect(null, actions)(Payments);
