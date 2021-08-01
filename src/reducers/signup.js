import { SET_REGISTER_ERRORS } from "../actions/signup";
import { REGISTERED_USER} from "../actions/signup";

const User = (state = {}, action) => {
  switch (action.type) {
    case REGISTERED_USER:
      return {
        ...state,
        id: action.id,
        loading: false
      };

    case SET_REGISTER_ERRORS:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

export default User;
