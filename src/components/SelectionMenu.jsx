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
                left: `calc(${clickCoords[0]}% - 2%)`,
                top: `calc(${clickCoords[1]}% + 6%)`,
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
                            <img
                                src={char.imgUrl}
                                alt={`${char.name} Image`}
                                className="charImg"
                            />
                            <h1 className="charName">{char.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SelectionMenu;