import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../Login/Login';
import Dragons from '../Dragons/Dragons';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={() => <Login></Login>} />
        <Route path="/dragons/" component={() => <Dragons></Dragons>} />
      </div>
    </Router>
  );
}

export default AppRouter;