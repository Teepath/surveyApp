import {
    LOGIN_USER,
    SET_LOGIN_ERRORS,
    LOG_OUT_USER,
    CLEAR_ERROR,
  } from "../actions/login";
  
  const loginReducer = (state = {}, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return {
          ...state,
          id: action.id,
        };
  
      case SET_LOGIN_ERRORS:
        return {
          ...state,
          error: action.message,
        };
      case CLEAR_ERROR:
        return {
          ...state,
          error: action.error,
        };
      case LOG_OUT_USER:
        return {
          ...state,
          id: null,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;