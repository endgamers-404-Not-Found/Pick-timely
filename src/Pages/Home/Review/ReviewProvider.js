import React from "react";
import { Provider } from "react-redux";
import store from "./../../../redux-compo-reviews/store/Store";
import Reviews from "./Reviews";

const ReviewProvider = () => {
  return (
    <Provider store={store}>
      <Reviews></Reviews>
    </Provider>
  );
};

export default ReviewProvider;