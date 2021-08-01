import { postSurveyNPSTemplate } from "../utils/_API_"
export const GET_NPS = "GET_NPS";
export const POST_NPS = "POST_NPS";


export const getNpsAction = (nps) => {
    return {
        type: GET_NPS,
        nps
    }
}


export const postAction = (survey) => {
    return {
        type: POST_NPS,
        survey
    }
}

export const handleNPSSurveyPost = (survey) =>dispatch => {
    postSurveyNPSTemplate(survey)
    dispatch(postAction(survey))
}

