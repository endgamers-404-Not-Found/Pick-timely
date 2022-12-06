import axios from 'axios';
import {GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILED} from './../constants/reviewsConstant'

export const reviewsActions = ()=>async (dispatch)=>{
    dispatch({type:GET_REVIEWS_REQUEST});
    try {
        const res = await axios.get('https://pick-timely-server.vercel.app/review');
        
        dispatch({type:GET_REVIEWS_SUCCESS, payload: res.data});
    } catch (error) {
        dispatch({type:GET_REVIEWS_FAILED, payload: error.message});
    }
}