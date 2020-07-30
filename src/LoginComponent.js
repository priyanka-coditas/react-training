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
export const history = createBrowserHistory();
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("login prop", props);
    this.state = {
      err: ""
    };
  }
   handleClick(e) {
    // code to handle callback
  }

  login(e) {
    e.preventDefault();
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;

    if (
      (username === "admin" && password === "p") ||
      (username === "user" && password === "p")
    ) {
      
      Auth.authenticate();
      Auth.getAuth();
      
      this.props.history.push({
        pathname: "/dashboard",
        state: { detail: username},
      });

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
          <div className="items">
            Username <input type="text" name="username"></input>
          </div>
          <br></br>
          <div className="items">
            Password <input type="password" name="password"></input>
          </div>
          <br></br>
          <div className="items"  >
            <button type="submit"  value="Login" onClick={this.handleClick.bind(this)} >Login</button>
          </div>
        </form>
      </div>
    );
  }
}
export default LoginComponent;
