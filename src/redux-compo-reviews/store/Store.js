import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reviewsReducers from "./../services/reducers/reviewsReducers";


const store = createStore(reviewsReducers, applyMiddleware(thunk));

export default store;