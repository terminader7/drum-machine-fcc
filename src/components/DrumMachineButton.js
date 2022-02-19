import React, { useRef, useEffect } from "react";

export const DrumMachineButton = ({
  id,
  buttonLabel,
  playAudio,
  displayValue,
}) => {
  useEffect(() => {
    const keyDownHandler = ({ key }) => {
      if (key.toUpperCase() === id) {
        playAudio();
      }
    };
    window.addEventListener("keydown", keyDownHandler);
    return () => window.removeEventListener("keydown", keyDownHandler);
  }, []);
  return (
    <div id="drum-machine-button">
      <button className="drum-pad" id={id} onClick={playAudio}>
        {buttonLabel}
      </button>
    </div>
  );
};
