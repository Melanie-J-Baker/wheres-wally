import { useEffect, useRef, useState } from 'react';
import Loading from './Loading';

function Scoreboard() {
    const [gameData, setGameData] = useState([{ _id: 1, player_name: 'time' }])
    const fetchDone = useRef(false);

    useEffect(() => {
        if (fetchDone.current) return;
        const fetchData = async () => {
            const response = await fetch(`${import.meta.env.VITE_API}/game`);
            const data = await response.json();
            console.log(data);
            setGameData(data);
        };
        fetchData();
        fetchDone.current = true;
    }, []);

    return fetchDone.current ? (
        <div className='scoreboard'>
            <h1 className='scoreboardHeading'>Leaderboard</h1>
            <div className='scoreboardDiv'>
                <div className='scoreboardTitleRow'>
                    <h1 className='timeHeading'>Time</h1>
                    <h1 className='playerHeading'>Player</h1>
                </div>
                {gameData.map((game, index) => (
                    <div
                        key={game._id}
                        className='scoreboardEntry'
                    >
                        <h1 className='scoreboardPosition'>{index + 1}.</h1>
                        <h1 className='scoreboardTime'>{((game.end_time - game.start_time) / 1000).toFixed(2)}s</h1>
                        <h1 className='scoreboardName'>{game.player_name}</h1>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <Loading />
    );
}



export default Scoreboard;