import React from 'react';
import "./App.css"
import * as ReactBootStrap from "react-bootstrap";
import DankMemes from "./component/Dankmemes";
import Navbar from "./component/Navbar";
import Pricing from "./component/Pricing";
import MoreDeets from "./component/MoreDeets";
import Features from "./component/Features";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





const NavBar = () => {
    return(
        <div className="App">
            <Router>
            <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Features" component={Features}>
            <Features />
          </Route>
          <Route path="/Pricing" component={Pricing}>
            <Pricing />
          </Route>
          <Route path="/Moredeets" component={MoreDeets}>
            <MoreDeets />
          </Route>
          <Route path="/Dankmemes" component={DankMemes}>
            <DankMemes />
          </Route>
        </Switch>
    </Router>
        </div>
    )
}

export default NavBar;