import config from "../config/Config";
import { authedUser, signInWithGoogle } from "../utils/_API_";
import { showLoading, hideLoading } from "react-redux-loading";

const auth = config.auth;
const db = config.firestore;

export const LOGIN_USER = "LOGIN_USER";
export const SET_LOGIN_ERRORS = "SET_LOGIN_ERRORS";
export const LOG_OUT_USER = "LOG_OUT_USER";
export const CLEAR_ERROR = " CLEAR_ERROR ";

export const loginAction = (id) => {
  return {
    type: LOGIN_USER,
    id,
  };
};




export const signOutUser = () => {
  return {
    type: LOG_OUT_USER,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
    error: null,
  };
};

export const LogInWithGoogle = (history) => dispatch => {
  return signInWithGoogle()
    .then((userId) => {
    dispatch(showLoading());
    dispatch(clearError());
    dispatch(loginAction(userId));
    history.push("/")
     dispatch(hideLoading());
  }).catch(err => {
    dispatch({
      type: SET_LOGIN_ERRORS,
      message: err.message,
    });
  })
}

export const handleAuthUser = (userData, history) => dispatch => {
  return authedUser(userData).then((userId) => {
     console.log(userId)
      if (userId) {
        dispatch(showLoading());
        dispatch(clearError());
        dispatch(loginAction(userId));
        history.push("/");
        dispatch(hideLoading());
      } 
    }).catch(err => {
      dispatch({
        type: SET_LOGIN_ERRORS,
        message: err.message,
      });
    })
  
    
    
};

export const logOut = () => (dispatch) => {
  dispatch(signOutUser());
  localStorage.removeItem("userId");
  localStorage.removeItem("token");
  // history.push("/login");
};