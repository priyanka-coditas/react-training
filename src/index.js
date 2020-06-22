import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Route,NavLink, Link, BrowserRouter as Router ,Switch  } from 'react-router-dom';
import App from './App';
import Contact from './Contact/Contact';
import Users from './Users/Users';
import Notfound from './Notfound';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const routing = (
    <Router>
     <div>
       <div className="menu">
     
      <div className="menu-item">
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
          </div>
          <div className="menu-item">
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>  </div>
          <div className="menu-item">
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>  </div>
      
    
      </div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
