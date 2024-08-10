import React, { useState } from 'react';
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import HomePage  from './screens/homePage';
import  ProductsPage  from './screens/productsPage';
import  OrdersPage  from './screens/ordersPage';
import  UserPage  from './screens/userPage';
import  OtherNavbar  from './components/headers/OtherNavbar';
import  HomeNavbar  from './components/headers/HomeNavbar';
import  Footer  from './components/footer';
import '../css/app.css';
import "../css/navbar.css";
import "../css/footer.css";
import HelpPage  from './screens/helpPage';
import Test from './screens/Test';
import { idText } from 'typescript';
import useBasket from './hooks/useBasket';
import AuthenticationModal from './components/auth';

function App() {

  const location = useLocation();
  console.log("locatiob:", location)
  const {cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  const [signupOpen, setSignupOpen] =useState<boolean>(false);
  const [loginOpen, setLoginOpen] =useState<boolean>(false);

  // HANDLERS

  const handleSignUpClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);



  
  return (
    <>
    {location.pathname === "/" ? <HomeNavbar cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} onDeleteAll={onDeleteAll} /> : <OtherNavbar cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} onDeleteAll={onDeleteAll}/>}
        <Switch>
       <Route path="/products">
            <ProductsPage onAdd={onAdd} />
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/member-page">
            <UserPage />
          </Route>
          <Route path="/help">
            <HelpPage />
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
        <Footer/>

        <AuthenticationModal 
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleLoginClose={handleLoginClose}
        handleSignupClose={handleSignUpClose}
        />
      </>
  );
}






export default App;



