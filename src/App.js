import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import DayPage from './routes/DayPage/DayPage';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={LandingPage()} />
        <Route exact path='/days' element={DayPage()} />
      </Routes>
    </div>
  );
}

export default App;
