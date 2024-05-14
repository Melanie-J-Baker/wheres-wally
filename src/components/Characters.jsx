import PropTypes from 'prop-types';
import '../images/wally.jpg';
import '../images/wendy.jpg';
import '../images/oddlaw.jpg';
import '../images/wizard.jpg';

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
                        <img className='charKeyImg' src={char.imgUrl} alt='charImg' />
                        <h1 className='charKeyName'>{char.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Characters;