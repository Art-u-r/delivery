import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './ui/NavBar';
import CustomerRegPage from './pages/auth/customer/CustomerRegPage';
import CourierRegPage from './pages/auth/courier/CourierRegPage';
import MainPage from './pages/main/MainPage';

export default function App({}) {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/join" element={<CustomerRegPage />} />
        <Route path="/auth/join/courier" element={<CourierRegPage />} />
      </Routes>
    </div>
  );
}
