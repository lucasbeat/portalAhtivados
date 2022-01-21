import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import RoutesPages from './routes/routes';

function App() {
  return (
    <div className='App'>
    <Router>
        <RoutesPages />
      </Router>
    </div>
  );
}

export default App;
