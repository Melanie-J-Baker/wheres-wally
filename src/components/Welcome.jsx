import { Link } from 'react-router-dom';
function Welcome() {
    return (
        <div id="welcome">
            <div id="welcomeImage"></div>
            <Link id="startBtn" to={'/game'}>START GAME</Link>
        </div>
    );
}

export default Welcome;