import PropTypes from 'prop-types';

SelectionMenu.propTypes = {
    characterInfo: PropTypes.array,
    handleCharSelection: PropTypes.func,
    clickCoords: PropTypes.array,
};

function SelectionMenu({ characterInfo, handleCharSelection, clickCoords }) {
    return (
        <div
            style={{
                position: 'absolute',
                left: `calc(${clickCoords[0]}% - 5%)`,
                top: `calc(${clickCoords[1]}% + 3%)`,
            }}
        >
            <div className="">
                <div className="characterMenu">
                    {characterInfo.map((char) => (
                        <div
                            key={char._id}
                            onClick={() => handleCharSelection(char._id)}
                            className="characterOption"
                        >
                            <div className={char.name == 'Wally' ? 'charImg wally' : char.name == 'Wendy' ? 'charImg wendy' : char.name == 'Wizard' ? 'charImg wizard' : char.name == 'Oddlaw' ? 'charImg oddlaw' : null}></div>
                            <h1 className="charName">{char.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SelectionMenu;