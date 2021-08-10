import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import View from "./pages/View";
import Profile from "./pages/Proflie";



export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component = {Login}/>
          <Route exact path={"/home"} component = {Home}/>
          <Route path={"/views"} component = {View}/>
          <Route path={"/profile"} component = {Profile}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}