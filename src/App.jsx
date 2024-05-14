import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Game from './components/Game';
import Welcome from './components/Welcome';
import Scoreboard from './components/Scoreboard';
import { useEffect, useState } from 'react';

import './App.css'

function App() {
  const [currentRoute, setCurrentRoute] = useState('home');

  useEffect(() => {
    if (window.location.pathname == 'scoreboard') {
      setCurrentRoute('scoreboard');
    } else if (window.location.pathname == 'game') {
      setCurrentRoute('game');
    } else if (window.location.pathname == '') {
      setCurrentRoute('home');
    }
  }, [])

  return (
    <Router>
      <nav>
        <ul className='mainMenu'>
          {currentRoute !== 'home' && (<li>
            <Link className="link" onClick={() => setCurrentRoute('home')} to="/">Home</Link>
          </li>)}
          {currentRoute !== 'scoreboard' && (<li>
            <Link className="link" onClick={() => setCurrentRoute('scoreboard')}to="/scoreboard">Leaderboard</Link>
          </li>)}
        </ul>
      </nav>
      <Routes>
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  )
}

export default App
