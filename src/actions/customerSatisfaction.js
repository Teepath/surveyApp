import { postSurveySatisfactionTemplate } from "../utils/_API_"

export const GET_CUS_SATISFACTION = "GET_CUS_SATISFACTION";
export const POST_CUS_SATISFACTION = "POST_CUS_SATISFACTION";

export const cusSatisfactionAction = (satisfaction) => {
    return {
        type: GET_CUS_SATISFACTION,
        satisfaction
    }
}


export const postSatisfactionAction = (survey) => {
    return {
        type: POST_CUS_SATISFACTION,
        survey
    }
}

export const handleSatisfactionSurveyPost = (survey) => dispatch => {   
    postSurveySatisfactionTemplate(survey)
    dispatch(postSatisfactionAction(survey))
}



