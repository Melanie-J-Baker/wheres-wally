import PropTypes from 'prop-types';
import '/wally.jpg';
import '/wendy.jpg';
import '/oddlaw.jpg';
import '/wizard.jpg';

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
                        <img className='charKeyImg' src={char.name == "Wally" ? '/wally.jpg' : char.name == "Wendy" ? '/wendy.jpg' : char.name == 'Wizard' ? '/wizard.jpg' : char.name == 'Oddlaw' ? '/oddlaw.jpg' : 'error'} alt='charImg' />
                        <h1 className='charKeyName'>{char.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Characters;