import axios from 'axios';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";


const getPackagesRequest = 'getPackagesRequest';
const getPackagesSuccess = 'getPackagesSuccess';
const getPackagesFailed = 'getPackagesFailed';

const initialState = {
    isLoading : false,
    packages: [],
    error: null,
};


const PackageAction = () => async (dispatch) =>{
    dispatch({type:getPackagesRequest});
    try {
        const res = await axios.get('https://pick-timely-server.onrender.com/packages');
        
        dispatch({type:getPackagesSuccess, payload: res.data});
    } catch (error) {
        dispatch({type:getPackagesFailed, payload: error.message});
    }
}




const packagesReducer = (state=initialState, action) =>{
    switch(action.type){
        case getPackagesRequest:
            return {
                ...state,
                isLoading: true
            }
        case getPackagesSuccess:
            return {
                isLoading: false,
                packages: action.payload,
            }
        case getPackagesFailed:
            return {
                isLoading: false,
                packages: [],
                error: action.payload,
            };
            

        default:
        return state;
    }
};







const store2 = createStore(packagesReducer, applyMiddleware(thunk));


export  {store2 ,PackageAction};