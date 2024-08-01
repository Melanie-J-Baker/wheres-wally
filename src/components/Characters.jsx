import PropTypes from 'prop-types';

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
                        <div className={char.name == "Wally" ? 'charKeyImg wally' : char.name == "Wendy" ? 'charKeyImg wendy' : char.name == 'Wizard' ? 'charKeyImg wizard' : char.name == 'Oddlaw' ? 'charKeyImg oddlaw' : 'error'}></div>
                        <h1 className='charKeyName'>{char.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Characters;