import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <Route
            exact
            path="/"
            element={
              <Home
                userObj={userObj}
                style={{
                  maxWidth: 890,
                  width: "100%",
                  margin: "0 auto",
                  marginTop: 80,
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            }
          ></Route>
        ) : (
          <>
            <Route exact path="/" element={<Auth />}></Route>
          </>
        )}
      </Routes>
    </Router>
  );
};
export default AppRouter;
