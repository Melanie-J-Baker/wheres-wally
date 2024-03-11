import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

WinForm.propTypes = {
    score: PropTypes.number,
}

function WinForm(score) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const responseSending = useRef(false);

    const submitWinForm = async () => {
        if (responseSending.current) return;
        if (name.length == 0 || name.length > 20) return;
        responseSending.current = true;

        const response = await fetch(
            `${import.meta.env.VITE_API}/game/name`,
            {
                method: 'PATCH',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                }),
            }
        ).then((responseSending.current = false));

        if (response.ok) {
            navigate(`/game/scoreboard`);
        } else {
            console.log('Issue uploading name to server')
        }
    };
    return (
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
    )
}

export default WinForm;