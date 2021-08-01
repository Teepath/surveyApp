import {postSurveyResearchTemplate  } from "../utils/_API_"

export const GET_PRODUCT = "GET_PRODUCT";
export const POST_PRODUCT_SURVEY = "POST_PRODUCT_SURVEY";


export const propductAction = (product) => {
    return {
        type: GET_PRODUCT,
        product
    }
}



export const productResearchAction = (survey) => {
    return {
        type: POST_PRODUCT_SURVEY,
        survey
    }
}


export const handleProductResearchTemplate = (survey) =>dispatch => {
    postSurveyResearchTemplate(survey)
    dispatch(productResearchAction(survey))
}





