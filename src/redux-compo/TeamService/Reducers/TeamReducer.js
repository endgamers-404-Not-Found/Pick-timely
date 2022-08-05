import { GET_TEAM_FAILED, GET_TEAM_REQUEST, GET_TEAM_SUCCESS } from "../Constants/TeamConstant";

const initialState = {
    isLoading : false,
    teams: [],
    error: null,
};

const teamReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_TEAM_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TEAM_SUCCESS:
            return {
                isLoading: false,
                teams: action.payload,
            }
        case GET_TEAM_FAILED:
            return {
                isLoading: false,
                teams: [],
                error: action.payload,
            };
            

        default:
        return state;
    }
};

export default teamReducer;