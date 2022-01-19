import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "chartjs-plugin-datalabels";

import './App.css';

import SideBar from './components/SideBar/sideBar';

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Ranking from './pages/Ranking/Ranking';
import Challenges from './pages/Challenges/Challenges';
import Analytics from './pages/Analytics/Analytics';
import AnalyticsAdvanced from './pages/Analytics/AnalyticsAdvanced';

function App() {
  return (
    <Router>
    <div className='App'>
      <div className='side'>
      <SideBar />
      </div>
      <div className='content'>
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='/profile' element={<Profile  />} ></Route>
          <Route exact path='/ranking' element={<Ranking />} ></Route>
          <Route exact path='/challenges' element={<Challenges />} ></Route>
          <Route exact path='/analytics' element={<Analytics />} ></Route>
          <Route exact path='/advancedAnalytics' element={<AnalyticsAdvanced />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
