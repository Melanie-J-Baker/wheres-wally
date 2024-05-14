import PropTypes from 'prop-types';
import Wally from '../images/wally.jpeg';
import Wendy from '../images/wendy.jpeg';
import Oddlaw from '../images/oddlaw.jpeg';
import Wizard from '../images/wizard.jpeg';

Characters.propTypes = {
    charData: PropTypes.array,
}

function Characters({ charData }) {
    return (
        <div className="charKeyDiv">
            <h1 className="charKeyHeading">Find us:</h1>
            <div className='charKey'>
                {' '}
                {charData.map((char) => (
                    <div key={char._id} className="char">
                        <img className='charKeyImg' src={char.name} alt='charImg' />
                        <h1 className='charKeyName'>{char.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Characters;