import './App.css';
import React from "react";
import Home from "./Page/Home";
import { Switch, Route } from "react-router-dom";
import About from './Page/About';
import Users from './Page/Users';
import Nomatch from './Page/Nomatch';
import Navbar from './components/Navbar';
import Keyboard from './components/Keyboard';
import Search from './Page/Search';
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/search" component={Search} />
        {/* <Route path="/keyboard" component={Keyboard} /> */}
        <Route path="*" component={Nomatch} />
      </Switch>
    </React.Fragment>
  );
};
export default App;