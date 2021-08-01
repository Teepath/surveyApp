import { POST_SURVEY, GET_SURVEYS, UPDATE_SURVEY, DELETE_SURVEY, GET_SINGLE_SURVEY } from "../actions/survey";

function surveys (state={}, action) {
    switch (action.type) {
        case GET_SURVEYS:
            return {
                ...state,
                surveys:action.surveys
            };
        case POST_SURVEY:
            return {
                ...state,
                surveys: {
                    ...state.surveys,
                    [action.survey.id]: action.survey
                }
                
            };
           
        case GET_SINGLE_SURVEY:
            return {
                ...state,
                surveys: {
                    ...state.surveys,
                    [action.survey.id]: action.survey
               }
             
            }
        case UPDATE_SURVEY:
            return {
                ...state,
                surveys: {
                    ...state.surveys,
                    [action.id]: {
                        id: action.id,
                        ...action.survey
                    }
                }
              
            };
        case DELETE_SURVEY:
            let newState ={}
                
            console.log( Object.keys(state.surveys).filter((id)=> state.surveys[id] !== state.surveys[action.id]))
            let arr = Object.keys(state.surveys).filter((id) => state.surveys[id] !== state.surveys[action.id])

            arr.map(res => {
                newState[res]= state.surveys[res]
            })
            
            return {
                ...state,
                surveys: newState
            }
        
        default:
            return state
    }
}

export default surveys;