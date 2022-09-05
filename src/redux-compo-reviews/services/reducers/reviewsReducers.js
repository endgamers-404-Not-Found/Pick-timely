import {GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILED} from "./../constants/reviewsConstant";

const initialState = {
    isLoading : false,
    reviews: [],
    error: null,
};

const reviewsReducers = (state=initialState, action) =>{
    switch(action.type){
        case GET_REVIEWS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_REVIEWS_SUCCESS:
            return {
                isLoading: false,
                reviews: action.payload,
            }
        case GET_REVIEWS_FAILED:
            return {
                isLoading: false,
                reviews: [],
                error: action.payload,
            };
            

        default:
        return state;
    }
};

export default reviewsReducers;