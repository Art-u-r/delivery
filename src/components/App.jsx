import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import NavBar from './UI/NavBar';

export default function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </>
  )
}
