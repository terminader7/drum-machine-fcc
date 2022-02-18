import React from "react";

export const DrumMachineButton = ({
  id,
  buttonLabel,
  audioUrl,
  displayValue,
}) => {
  return (
    <div id="drum-machine-button">
      <button className="drum-pad" id={id}>
        {displayValue}
      </button>
    </div>
  );
};
