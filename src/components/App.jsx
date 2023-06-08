import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './UI/NavBar'
import CustomerRegPage from './pages/auth/customer/CustomerRegPage';
import MainPage from './pages/main/MainPage';
import LoginPage from './pages/login/LoginPage';

export default function App({ user }) {
  return (
    <div>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/join" element={<CustomerRegPage />} />
      </Routes>
    </div>
  );
}
