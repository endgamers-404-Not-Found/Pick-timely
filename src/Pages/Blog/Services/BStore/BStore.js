import { applyMiddleware, createStore } from "redux";
import blogReducer from "../reducers/blogReducer";
import thunk from "redux-thunk";

const Bstore=createStore( blogReducer,applyMiddleware(thunk))

export default Bstore;