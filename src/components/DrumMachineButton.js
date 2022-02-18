import React from "react";

export const DrumMachineButton = ({
  id,
  buttonLabel,
  audioUrl,
  displayValue,
}) => {
  return (
    <div id="drum-machine-button">
      <button
        className="drum-pad"
        id={id}
        onClick={() => {
          let audio = new Audio(audioUrl);
          audio.play();
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
};
