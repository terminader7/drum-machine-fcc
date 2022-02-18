import React from "react";

export const DrumMachineButton = ({ id, textValue }) => {
  return (
    <div id="drum-machine-button">
      <button className="drum-pad" id={id}>
        {textValue}
      </button>
    </div>
  );
};
