
import React, {useState} from "react";
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

//https://www.youtube.com/watch?v=zWLKPRt-a68

function App() {


  const [number, setNumber] = useState(1);

  return (
    <Router>
    



      <Switch>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/">
            <Home number={number} setNumber={setNumber}/>
          <Route path="/posts">
             <Posts id={parseInt(number)}/>
          </Route>  
          </Route>
        </Switch>


    </Router>
  );
}

export default App;
