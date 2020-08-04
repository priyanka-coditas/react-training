import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Link,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import dashboard from "./dashboard";
import StudentMarksTable from "./Components/StudentMarksTable";
import "./Components/index.scss";
import Auth from "./Auth";
import App from "./App";
import "./App.css";

class Routers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "false",
    };
  }

  handleInput(event) {
    // let value = event.target.value;
    this.setState({
      isLoggedIn: "true",
    });
  }

  
  render() {
    Auth.authenticate();

    return (
      <div>
       {/* <div> <h1>{this.state.isLoggedIn}</h1> */}
        {/* <LoginComponent isLogin={this.handleInput.bind(this)}></LoginComponent> */}
        <BrowserRouter exact path="/" component={App}>
          <div>
            <Link to={{ pathname: `/login` }}  className={this.state.isLoggedIn === "true" ? "Btn" : "Btn-disable"}>
              {" "}
              <span onClick={Auth.signout()}>Logout</span>
            </Link>
          </div>
          <Switch>
          <Route
              path="/login" render={(this.props=() => (<LoginComponent isLogin={this.handleInput.bind(this)} />
                ))
              }
            />
            {/* <Route path="/login" component={LoginComponent} /> */}
            <PrivateRoute path="/dashboard" component={dashboard} />
            <PrivateRoute path="/view" component={StudentMarksTable} />
            <Redirect from="/" to="/login" component={LoginComponent} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )
    }
  />
);
export default Routers;
