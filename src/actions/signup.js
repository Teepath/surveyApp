import config from "../config/Config";

import { loginAction, clearError } from "./login";
import { signUp,signUpWithGoogle  } from "../utils/_API_"
import { showLoading, hideLoading } from "react-redux-loading";


export const REGISTERED_USER = "REGISTERED_USER";
export const SET_REGISTER_ERRORS = "SET_REGISTER_ERRORS";

const dbStore = config.firestore;

export const signupNewUser = (id) => {
  return {
    type: REGISTERED_USER,
    id,
  };
  
};






export const handleSignUpUser = (credentials, history) => (dispatch) => {
  signUp(credentials, history)
    .then((userId) => {
      dispatch(showLoading());
      dispatch(clearError());
      dispatch(signupNewUser(userId));
      dispatch(loginAction(userId))
      history.push("/");
      dispatch(hideLoading());
    })
    .catch((err) => {
      dispatch({
        type: SET_REGISTER_ERRORS,
        message: err.message,
      });
    });
};




export const handleSingUpWithGoogle = (history) =>dispatch => {
  return signUpWithGoogle().then((userId) => {
    dispatch(showLoading());
    dispatch(clearError());
    dispatch(signupNewUser(userId));
    dispatch(loginAction(userId))
    dispatch(hideLoading());
  }).catch(err => {
    dispatch({
      type: SET_REGISTER_ERRORS,
      message: err.message,
    });
  })
}