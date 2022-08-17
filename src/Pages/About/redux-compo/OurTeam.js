import React from "react";
import { Provider } from "react-redux";
import store from "./Store/Store";
import TeamMembers from "./TeamMembers";

const OurTeam = () => {
  return (
    <Provider store={store}>
      <TeamMembers></TeamMembers>
    </Provider>
  );
};

export default OurTeam;
