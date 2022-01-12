import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import SideBar from './components/SideBar/sideBar';
import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Ranking from './pages/Ranking/Ranking';
import Challenges from './pages/Challenges/Challenges';
import Analytics from './pages/Analytics/Analytics';

function App() {
  return (
    <Router>
    <div className='App'>
      <div className='side'>
      <SideBar />
      </div>
      <div className='content'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='/profile' element={<Profile />} ></Route>
          <Route exact path='/ranking' element={<Ranking />} ></Route>
          <Route exact path='/challenges' element={<Challenges />} ></Route>
          <Route exact path='/analytics' element={<Analytics />} ></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
