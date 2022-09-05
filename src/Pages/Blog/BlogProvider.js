import React from "react";
import { Provider } from "react-redux";
import Bstore from "./Services/BStore/BStore";

import Blogs from "./Blog";

const BlogProvider = () => {
  return (
    <Provider store={Bstore}>
      <Blogs></Blogs>
    </Provider>
  );
};

export default BlogProvider;