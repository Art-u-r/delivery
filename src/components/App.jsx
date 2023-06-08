import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './ui/NavBar';
import CustomerRegPage from './pages/auth/customer/CustomerRegPage';
import MainPage from './pages/main/MainPage';
import LoginPage from './pages/login/LoginPage';

export default function App({ orders, user }) {
  return (
    <div>
      <NavBar user={user} />
      <Routes>
        <Route path='/' element={<MainPage orders={orders} />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/join" element={<CustomerRegPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
