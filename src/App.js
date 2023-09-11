import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Rooms/" element={<Rooms />} />
        <Route exact path="/Rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
