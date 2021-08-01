import { postResponse, getReportAnalysis, getSingleAnalysis } from "../utils/_API_";
import { CLEAR_ERROR } from "../actions/login";

export const POST_RESPONSE = "POST_RESPONSE";
export const GET_RESPONSE = "GET_RESPONSE";
export const GET_ANALYSIS ="GET_ANALYSIS";
export const GET_SINGLE_ANALYSIS = "GET_SINGLE_ANALYSIS"


const postResponseToDB = (report, id, userId) => {
    return {
        type: POST_RESPONSE,
        report,
        id,
        userId
    }
}

export const getResponses = (reports) => {
    return {
        type: GET_RESPONSE,
        reports
    }   
}


export const getAnalysis = (analysis) => {
    return {
        type: GET_ANALYSIS,
        analysis
    }
}

export const getAnalysisAction = (report) => {
    return {
        type: GET_SINGLE_ANALYSIS,
        report
    }
}

export const handleSingleReport = (id) => dispatch => {
    return getSingleAnalysis(id).then((data) => {
        dispatch(getAnalysisAction(data))
    })
}


export const handlePostResponse = (data, id, userId) => dispatch => {
        postResponse(data, id, userId)
        dispatch(postResponseToDB(data, id, userId))

}


export const handleAnalysis = (id) => dispatch => {
    return getReportAnalysis(id).then((analysis) => {
        dispatch(getAnalysis(analysis))
    })
}

// export const handlePostTemplateItem = (item, tempName) => dispatch =>{
    
//     return postTemplateResponse(item, tempName).then((mesagge) => {
//         dispatch(postResponseToDB(mesagge))
//     })

// }
