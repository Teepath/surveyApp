import { GET_CUS_FEEDBACK, POST_CUS_FEEDBACK } from "../actions/customerFeedback";



const CustomerFeedback = (state = {}, action) => {

    switch (action.type) {
        case GET_CUS_FEEDBACK:
            return {
                ...state,
                ...action.feedback
            }
        case POST_CUS_FEEDBACK:
            return {
                ...state.survey
            }
        default:
            return state
    }
};

export default CustomerFeedback;