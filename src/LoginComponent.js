import React from "react";
import "./App.css";
import Routers from "./Routers";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Link,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import dashboard from "./dashboard";
import StudentMarksTable from "./Components/StudentMarksTable";
import "./Components/index.scss";
import App from "./App";
import "./App.css";
import Auth from "./Auth";
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
   
    console.log("login prop", props);
    this.state = {
      err: "",
    };
    
  }
  // redirectToHome = () => {
  //   const { history } = this.props;
  //   console.log('history',history);
  //  }
  login(e) {
    e.preventDefault();
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;

    if (
      (username === "admin" && password === "p") ||
      (username === "user" && password === "p")
    ) {
      console.log('before routing');
      this.props.history.push({
        pathname: "/dashboard",
        state: { detail: 'admin'},
      });
      this.props.isLogin();
      Auth.authenticate();
      Auth.getAuth();
      
      // this.props.isLogin();
      console.log('after routing');
      return true;
    } else {
      this.setState({
        err: "Invalid",
      });
    }
  }
  render() {
    let format = {
      color: "red",
    };
    
    return (
      <div className="Form-container">
        <h3>Login</h3>
        <span style={format}>{this.state.err != "" ? this.state.err : ""}</span>

        <form method="post" onSubmit={this.login.bind(this)}>
          {/* <form method="post"> */}
          <div className="items">
            Username <input type="text" name="username"></input>
          </div>
          <br></br>
          <div className="items">
            Password <input type="password" name="password"></input>
          </div>
          <br></br>
          <div className="items">
            {/* <button type="submit" >
              Login
            </button> */}
            <input type="submit" Value="Login"></input>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(LoginComponent);
