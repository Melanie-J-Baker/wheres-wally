import { BrowserRouter as Router, Routes, Link, Route, useLocation } from 'react-router-dom';
import Game from './components/Game';
import Welcome from './components/Welcome';
import Scoreboard from './components/Scoreboard';
import { useEffect, useState } from 'react';

import './App.css'

function App() {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState('home');

  useEffect(() => {
    if (location.pathname == '/wheres-wally/scoreboard') {
      setCurrentRoute('scoreboard');
    } else if (location.pathname == '/wheres-wally/game') {
      setCurrentRoute('game');
    } else if (location.pathname == '/wheres-wally') {
      setCurrentRoute('home');
    }
  }, [location.pathname])

  return (
    <Router>
      <nav>
        <ul className='mainMenu'>
          {currentRoute !== 'home' && (<li>
            <Link className="link" onClick={() => setCurrentRoute('home')} to="/wheres-wally">Home</Link>
          </li>)}
          {currentRoute !== 'scoreboard' && (<li>
            <Link className="link" onClick={() => setCurrentRoute('scoreboard')}to="/wheres-wally/scoreboard">Leaderboard</Link>
          </li>)}
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/wheres-wally" element={<Welcome />} />
        <Route path="/wheres-wally/scoreboard" element={<Scoreboard />} />
        <Route path="/wheres-wally/game" element={<Game />} />
      </Routes>
    </Router>
  )
}

export default App
