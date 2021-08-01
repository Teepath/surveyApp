import {  postSurvey, updateSurvey, deleteDoc, getSingleSurvey} from "../utils/_API_";

export const POST_SURVEY = "POST_SURVEY";
export const POST_SURVEY_ERROR = "POST_SURVEY_ERROR";
export const GET_SURVEYS = "GET_SURVEYS";
export const GET_SINGLE_SURVEY="GET_SINGLE_SURVEY";
export const DELETE_SURVEY = "DELETE_SURVEY";

export const UPDATE_SURVEY = "UPDATE_SURVEY";

export  const postSurveyToState = (survey) => {
    return {
        type: POST_SURVEY,
        survey
    }
}

export const getSurveys = (surveys) => {
    return {
        type: GET_SURVEYS,
        surveys
    }
}

export const deleteSurveyAction = (id) => {
    return {
        type: DELETE_SURVEY,
        id
    }
}

export const getSingleSurveyAction = (survey) => {
    return {
        type: GET_SINGLE_SURVEY,
        survey
    }
}


export const handleGetSingleSurvey = (id) => (dispatch) => {
    return getSingleSurvey(id).then((data) => {
        console.log(data)
        dispatch(getSingleSurveyAction(data))
    })
}

export const handleSurveyDelete = (id) => dispatch => {
    deleteDoc(id);
    dispatch(deleteSurveyAction(id))
}


 export const handlePostSurveyToState = (survey) => dispatch => {
        postSurvey(survey)
        dispatch(postSurveyToState(survey))  
 }

export const updateSurveyAction = (id, survey) => {
    return {
        type:UPDATE_SURVEY,
        id,
        survey
     }
 }

export const handleUpdateSurvey = (id, survey) => dispatch => {
    return updateSurvey(id, survey).then(() => {
        dispatch(updateSurveyAction(id, survey))
    })
 }



