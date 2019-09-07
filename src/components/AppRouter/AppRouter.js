import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../Login/Login';
import Dragons from '../Dragons/Dragons';
import LoginAuth from '../../services/LoginAuth';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={() => <Login></Login>} />
        <Route path="/dragons/" component={() => LoginAuth.isUserLogged() ? <Dragons></Dragons> : <Login></Login>} />
      </div>
    </Router>
  );
}

export default AppRouter;