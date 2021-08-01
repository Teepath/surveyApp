import { POST_RESPONSE, GET_RESPONSE, GET_ANALYSIS, GET_SINGLE_ANALYSIS } from "../actions/response";
import { CLEAR_ERROR } from "../actions/login";




const responseReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_RESPONSE:
            return {
                ...state,
                reports: {
                    ...state.reports,
                    [action.id]: action.report
               }
            };
        
            case GET_RESPONSE:
                return {
                  ...state,
                  reports: action.reports,
                };
        case GET_ANALYSIS:
            return {
                ...state,
                analysis: action.analysis,
            }
        case CLEAR_ERROR:
        default:
            return state
    }
}


export default responseReducer;