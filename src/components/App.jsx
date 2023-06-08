import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import NavBar from './UI/NavBar';
import AccountPage from './Pages/AccountPage';

export default function App({ orders }) {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/account" element={<AccountPage orders={orders} />} />
      </Routes>
    </>
  );
}
