import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading'

WinForm.propTypes = {
    gameId: PropTypes.string,
    score: PropTypes.number,
}

function WinForm({ gameId, score }) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const submitWinForm = async () => {
        if (name.length == 0 || name.length > 20) return;
        setLoading (true);
        const response = await fetch(
            `${import.meta.env.VITE_API}/game/${gameId}/name`,
            {
                method: 'PATCH',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Request-Headers": "Content-Type"
                },
                body: JSON.stringify({
                    name: name,
                }),
            }
        ).then(setLoading(false));

        if (response.ok) {
            navigate('/scoreboard');
        } else {
            console.log('Issue uploading name to server')
        }
    };
    return !loading ? (
        <div className="winForm">
            <h1 className="winFormHeading">Your Score: {(score / 1000).toFixed(2)}s</h1>
            <input
                id="name"
                name="name"
                className='nameInput'
                maxLength={20}
                minLength={1}
                type='text'
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <button 
                className='winFormBtn'
                onClick={submitWinForm}
            >Submit</button>
        </div>
    ) : <Loading/>
}

export default WinForm;