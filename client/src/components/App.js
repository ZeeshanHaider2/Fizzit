//This will hold our React Router stuff/things for viewing
import React, { Component } from "react"; //for class based
//import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; //contains set of react router helpers for dom navigation
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Faq from "./Faq";
import Contact from "./Contact";
import OrderNow from "./Order";
import Dashboard from "./Dashboard";

//const Dashboard = () => <h2>Fizzit Dashboard/Reserved for Members Only!</h2>;
const SurveyNew = () => <h2>Fizzit Survey/Blogg</h2>;
//const Landing = () => <h2>Fizzit Home Page</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/order" component={OrderNow} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new/" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

//Functional component will be refactored into class based component as above
// const App = () => {
//   return (
//     <div className="container">
//       <BrowserRouter>
//         <div>
//           <Header />
//           <Route exact path="/" component={Landing} />
//           <Route exact path="/surveys" component={Dashboard} />
//           <Route path="/surveys/new/" component={SurveyNew} />
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };

export default connect(null, actions)(App);
