function FancyButton({text="Clear to-do list", color="blue", fontSize=1, handleClick}) {
    const buttonStyle={
    color: color,
    fontSize: fontSize + "em",
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    );
}

export default FancyButton;