import { unwrapResult } from "@reduxjs/toolkit";
import firebase from 'firebase';
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./features/Auth/index";
import { getUser } from "./app/userSlice";
import Profile from "./features/Profile/index";
import MainPage from "./layouts/Main";
import Booking from "./features/Booking/components/BookingSeats";
import CheckOut from "./features/Checkout/pages";



export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log('User is not logged in');
        return;
      }
      try {
        const actionResult = await dispatch(getUser());
        const currentUser = unwrapResult(actionResult); 
        console.log('Logged in user: ', currentUser);
        localStorage.setItem('user', JSON.stringify(currentUser));
      } catch (error) {
        console.log('Failed to login ', error.message);
      }
    });

    return () => unregisterAuthObserver();
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component = {MainPage}/>
          <Route path={"/login"} component = {Login}/>
          <Route path={"/profile"} component = {Profile}/>
          <Route path={"/booking"} component = {Booking}/>
          <Route path={"/checkout"} component = {CheckOut}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}