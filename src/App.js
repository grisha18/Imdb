
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contacts from "./Contacts";
import User from "./User";
import Home from "./Home";
import Posts from "./Posts";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>



      <Switch>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/">
            <Home />
          <Route path="/posts">
              <Posts />
            </Route>  
          </Route>
        </Switch>


    </Router>
  );
}

export default App;
