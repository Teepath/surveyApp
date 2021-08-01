import { GET_PRODUCT, POST_PRODUCT_SURVEY} from "../actions/product";



const PRODUCTSURVEY = (state = {}, action) => {

    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                ...action.product
            }
        case POST_PRODUCT_SURVEY:
            return {
                ...state
            }
        default:
            return state
    }
};

export default PRODUCTSURVEY;