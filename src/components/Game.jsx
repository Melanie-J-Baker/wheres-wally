import { useEffect, useRef, useState } from "react";
import SelectionMenu from '../components/SelectionMenu';
import gameImage from '../../public/images/game.jpg'
import WinForm from "./WinForm";
import Characters from "./Characters";
import Timer from "./Timer";
import Markers from "./Markers";
import Loading from "./Loading";
function Game() {
    const fetchDone = useRef(false);
    const fetchingCharCoords = useRef(false);
    const [charData, setCharData] = useState();
    const [isSelecting, setIsSelecting] = useState(false);
    const [clickCoords, setClickCoords] = useState([0, 0]);
    const [markers, setMarkers] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    const handleClick = (event) => {
        if (fetchingCharCoords.current) return;
        const target = event.target;
        const rect = target.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / target.offsetWidth) * 100;
        const y = ((event.clientY - rect.top) / target.offsetHeight) * 100;
        setIsSelecting(true);
        setClickCoords([parseInt(x), parseInt(y)]);
        console.log(clickCoords);
    };

    const handleCharSelection = async (id) => {
        fetchingCharCoords.current = true;
        const response = await fetch(
            `${import.meta.env.VITE_API}/characters/${id}`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    x: clickCoords[0],
                    y: clickCoords[1],
                })
            }
        );
        const data = await response.json().then((fetchingCharCoords.current = false))
        if (data) {
            setMarkers((prevMarkers) => [...prevMarkers, clickCoords]);
            setCharData((prevCharData) => prevCharData.filter((char) => char._id !== id));
        }

        if (charData.length == 1) {
            const response = await fetch(
                `${import.meta.env.VITE_API}/game/time`,
                {
                    method: 'PATCH',
                    mode: 'cors',
                }
            );
            if (response.ok) {
                const data = await response.json();
                setGameOver(true);
                setScore(data.score);
            } else {
                console.log("There was an issue with the server")
            }
        }
        setIsSelecting(false);
        setClickCoords([0, 0]);
    }

    useEffect(() => {
        if (fetchDone.current) return;
        const fetchData = async () => {
            const response = await fetch(`${import.meta.env.VITE_API}/characters`);
            const data = await response.json();
            setCharData(data);
        }
        fetchData('characters');
        fetchDone.current = true;
    })
    
    return gameOver ? (
        <WinForm score={score} />
    ) : !fetchDone.current ? (
        <Loading />
    ) : (
        <div onClick={() => {isSelecting && setIsSelecting(false);}} className="select-none">
        <Timer />
        <Characters charData={charData} />
            <img
                className="gameImg"
                src={gameImage}
                alt="Game Image"
                onClick={handleClick}
            />
                <Markers markers={markers} />
                {isSelecting && (
                    <SelectionMenu
                        characterInfo={charData}
                        handleCharSelection={handleCharSelection}
                        clickCoords={clickCoords}
                    />
                )}
            </div>
        )
    }

export default Game;