import { useEffect, useState } from 'react';

function Timer() {
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        const startTime = Date.now();
        const interval = setInterval(() => {
            const secondsPassed = (Date.now() - startTime) / 1000;
            setTimer(secondsPassed);
        }, 10);
        return () => clearInterval(interval);
    }, []);
    return (
        <h1 className="timerHeader">Time: {timer.toFixed(2)}s</h1>
    )
}

export default Timer;