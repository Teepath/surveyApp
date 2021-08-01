import {  postSurveyCustomerFeedbackTemplate  } from "../utils/_API_"
export const GET_CUS_FEEDBACK = "GET_CUS_FEEDBACK";
export const POST_CUS_FEEDBACK = "POST_CUS_FEEDBACK";


export const cusFeedbackAction = (feedback) => {
    return {
        type: GET_CUS_FEEDBACK,
        feedback
    }
}



export const postActionFeedBack = (survey) => {
    return {
        type: POST_CUS_FEEDBACK,
        survey
    }
}


export const handleCusFeedbackSurveyPost = (survey) =>dispatch => {
    postSurveyCustomerFeedbackTemplate(survey)
    dispatch(postActionFeedBack(survey))
}




