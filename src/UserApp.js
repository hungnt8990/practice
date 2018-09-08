import React from 'react';
import UserContainer from './containers/UserContainer';
import UserSignUpContainer from './containers/UserSignUpContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const UserApp = () => (
  <div>
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Đăng nhập</Link>
        </li>
        <li>
          <Link to="/signin">Đăng ký</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={UserContainer} />
      <Route path="/signin" component={UserSignUpContainer} />
    </div>
  </Router>
  </div>
)

export default UserApp;