import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import NavBar from './UI/NavBar';

export default function App({orders}) {
  // console.log('app==========', orders);
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<MainPage orders={orders} />} />
      </Routes>
    </>
  )
}
