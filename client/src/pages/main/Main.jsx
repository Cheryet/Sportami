import { React, useContext } from "react";
import { modeContext } from "../../providers/ModeProvider";

import MatchProvider from "../../providers/MatchProvider";
import UserDataProvider from "../../providers/UserDataProvider";

import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import OpponentList from "./opponents/OpponentList";
import Matches from "./matches/Matches";
import Review from "./review/Review";

const Main = (props) => {
  const { mode, PROFILE, OPPONENT, NOTIFICATIONS, REVIEW } =
    useContext(modeContext);

  return (
    <UserDataProvider token={props.token}>
      <MatchProvider>
        <Navbar />
        {mode === PROFILE && <Profile token={props.token} />}
        {mode === OPPONENT && <OpponentList token={props.token} />}
        {mode === NOTIFICATIONS && <Matches token={props.token} />}
        {mode === REVIEW && <Review token={props.token} />}
      </MatchProvider>
    </UserDataProvider>
  );
};

export default Main;
