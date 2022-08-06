import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import teamReducer from "../TeamService/Reducers/TeamReducer";


const store = createStore(teamReducer, applyMiddleware(thunk));

export default store;