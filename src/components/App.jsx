import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './UI/NavBar';
import CustomerRegPage from './Pages/auth/customer/CustomerRegPage';
import MainPage from './Pages/main/MainPage';
import LoginPage from './Pages/login/LoginPage';
import AccountPage from './Pages/AccountPage';
import MainPageContextProvider from './context/MainPageContext';
import CustomerRegPageContextProvider from './context/CustomerRegPageContext';
import LoginPageContextProvider from './context/LoginPageContext';


export default function App({ orders, user }) {
  return (
    <MainPageContextProvider orders={orders}>
      <CustomerRegPageContextProvider>
        <LoginPageContextProvider>
    <div>
      <NavBar user={user} />
      <Routes>

        <Route path="/account" element={<AccountPage orders={orders} />} />

        <Route path='/' element={<MainPage orders={orders} user={user} />} />
        <Route path="/auth/join" element={<CustomerRegPage />} />
        <Route path="/auth/login" element={<LoginPage />} />

      </Routes>
    </div>
    </LoginPageContextProvider>
      </CustomerRegPageContextProvider>
    </MainPageContextProvider>
  );
}
