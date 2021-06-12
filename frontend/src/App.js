import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/index";
import Home from "./components/home/index";
import ClosedCases from "./components/closedCases/ClosedCases";
import Login from "./components/auth/login/index";
import Register from "./components/auth/register/index";
// import AddNewCase from "./components/AddNewCase/index"
import CaseSearch from "./components/cases_search";
import Update from './components/case/updateCase'
import IsClose from './components/IsClose'
// import Update from "./components/case/updateCase";

import Header from './components/header/header'



import CreditCardAdd from "./components/add_creditcard/index";
import AddNewCase from "./components/AddNewCase/index";
import Profile from "./components/Profile/index";
import DonationConfirm from "./components/donation_confirmed/index"

const App = () => {
  const [path, setPath] = useState("");
  const [token, setToken] = useState("");
  const [nickName, setNickName] = useState("");
  const [homePageSection, setHomePageSection] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("nickName"))
      setNickName(localStorage.getItem("nickName"));
  }, []);

  console.log("INSIDE APP: ", token);
  return (
    <>
      <div className="App">

        <Header />
        <Navigation token={token} setHomePageSection={setHomePageSection} setToken={setToken} />
        <Route exact path="/" render={() => <Home setPath={setPath} homePageSection={homePageSection} />} />

        <Route
          exact
          path="/login"
          render={() => <Login path={path} setToken={setToken} />}
        />
        <Route exact path="/register" render={() => <Register />} />
        <Route
          exact
          path="/cases/closed"
          render={() => <ClosedCases setPath={setPath} />}
        />
        <Route
          path="/cases/categeories/:categeory"
          render={() => <CaseSearch setPath={setPath} />}
        />
        <Route exact path="/cases/:id" />
        <Route exact path="/update" render={() => <Update token={token} />} />
        <Route
          exact
          path="/profile"
          render={() => <Profile nickName={nickName} />}
        />
        <Route
          exact
          path="/cases/create"
          render={() => <AddNewCase token={token} />}
        />
        {/* <Route exact path="/cases/create" component={AddNewCase} /> */}
        <Route exact path="/cases/:id/donate" render={()=><CreditCardAdd token={token}/>} />
        <Route exact path="/donation_confirmed" component={DonationConfirm}/>
        <Route
          exact
          path="/cases/:id/donate"
          render={() => <CreditCardAdd token={token} />}
        />
      </div>
    </>
  );
};

export default App;
