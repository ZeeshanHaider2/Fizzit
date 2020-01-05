//it holds our code for all the actions
import axios from "axios";
import { FETCH_USER } from "./types";

//Refactoring to async/await 86
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// export const fetchUser = () => {
//   return function(dispatch) {
//     axios
//       .get("/api/current_user")
//       .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };
//fetchUser action creator, which is intended to make a request to our back-end api and somehow
//communicate to our Oauth reducer whether Or Not our user is logged in. 83

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token); //make a post request to the back-end server which then will be called whenver we will get the token from the checkout form
  dispatch({ type: FETCH_USER, payload: res.data });
};
