import React, { useEffect } from "react";

export const DrumMachineButton = ({
  id,
  buttonLabel,
  playAudio,
  displayValue,
  setDisplayText,
}) => {
  useEffect(() => {
    const keyDownHandler = ({ key }) => {
      if (key.toUpperCase() === id) {
        playAudio();
        setDisplayText(displayValue);
      }
    };
    window.addEventListener("keydown", keyDownHandler);
    return () => window.removeEventListener("keydown", keyDownHandler);
  }, []);
  return (
    <div id="drum-machine-button">
      <button
        className="drum-pad"
        id={id}
        onClick={() => {
          playAudio();
          setDisplayText(displayValue);
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
};
