import React from "react";
import "./App.css";
import Routers from "./Routers";
import LoginComponent from "./LoginComponent";
import Auth from "./Auth";
class App extends React.Component {
  constructor(props) {
    super(props);
    localStorage.setItem("isLoggedin", false);
    console.log('props',localStorage.getItem("isLoggedin"));
  }
  login(e) {
    e.preventDefault();
    // Auth.authenticate();
    this.props.history.push('/login');
  };
  logout() {
    Auth.signout();
  }
  render() {
    Auth.authenticate();
    return (
     
  <div>
       
      
        {/* <LoginComponent/> */}
        
        {/* {navHeader} */}
        <Routers />
        </div>
      //   {/* <Link to="/login">Login</Link> */}
      //   <Switch>
      //     <Route path="/login" component={LoginComponent} />
      //     <Route path="/dashboard" component={dashboard} />
      //     <Route path="/view" component={StudentMarksTable} />
      //   </Switch>
      // </BrowserRouter>
    );
  }
}

export default App;
