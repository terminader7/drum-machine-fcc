import React, { useRef, useEffect } from "react";

export const DrumMachineButton = ({
  id,
  buttonLabel,
  playAudio,
  displayValue,
}) => {
  const handleKeyPress = ({ key }) => {
    if (key) {
      console.log(key);
    }
  };
  return (
    <div id="drum-machine-button">
      <button className="drum-pad" id={id} onClick={playAudio}>
        {buttonLabel}
      </button>
    </div>
  );
};
