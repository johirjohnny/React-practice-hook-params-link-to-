import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Friend from './Component/Friend/Friend';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Nomatch from './Component/Nomatch/Nomatch';
import FriendDetail from './Component/FriendDetail/FriendDetail';

function App() {
  return (
    <Router>
       <Switch>
         <Route path = "/home">
            <Home/>
         </Route>
         <Route path = "/friend/:friendId">
            <FriendDetail/>
         </Route>
         <Route exact path ="/">
           <Home/>
         </Route>
         <Route path ="*">
           <Nomatch/>
         </Route>
       </Switch>
    </Router>
  );
}

export default App;
