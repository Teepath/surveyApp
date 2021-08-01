import { GET_CUS_SATISFACTION, POST_CUS_SATISFACTION} from "../actions/customerSatisfaction";


const CustomerSatisfaction = (state = {}, action) => {

    switch (action.type) {
        case GET_CUS_SATISFACTION:
            return {
                ...state,
                ...action.satisfaction
            }
        case POST_CUS_SATISFACTION:
            return {
                ...state.survey
            }
        default:
            return state
    }
};

export default CustomerSatisfaction;