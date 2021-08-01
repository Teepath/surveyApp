import { GET_NPS, POST_NPS } from "../actions/nps";



const Nps = (state = {}, action) => {

    switch (action.type) {
        case GET_NPS:
            return {
                ...state,
                ...action.nps
            }
        case POST_NPS:
            return {
                ...state.survey
            }
           
        default:
            return state
    }
};

export default Nps;