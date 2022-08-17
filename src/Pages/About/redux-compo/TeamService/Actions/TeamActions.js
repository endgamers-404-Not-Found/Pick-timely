import axios from 'axios';
import { GET_TEAM_FAILED, GET_TEAM_REQUEST, GET_TEAM_SUCCESS } from '../Constants/TeamConstant';

const TeamActions = () => async (dispatch) =>{
    dispatch({type:GET_TEAM_REQUEST});
    try {
        const res = await axios.get('https://pick-timely.herokuapp.com/developers');
        
        dispatch({type:GET_TEAM_SUCCESS, payload: res.data});
    } catch (error) {
        dispatch({type:GET_TEAM_FAILED, payload: error.message});
    }
}

export default TeamActions;

