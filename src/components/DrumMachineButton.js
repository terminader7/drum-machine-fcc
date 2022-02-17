import React from "react";

export const DrumMachineButton = ({ id, textValue }) => {
  return (
    <div id="drum-machine-button">
      <button className="drum-pad" id={id}>
        {textValue}
      </button>
      {/* <button class="drum-pad" id="Q">
        Heater 1
      </button>
      <button class="drum-pad" id="W">
        Heater 2
      </button>
      <button class="drum-pad" id="E">
        Heater 3
      </button>
      <button class="drum-pad" id="A">
        Heater 4
      </button>
      <button class="drum-pad" id="S">
        Clap
      </button>
      <button class="drum-pad" id="D">
        Open HH
      </button>
      <button class="drum-pad" id="Z">
        Kick n'Hat
      </button>
      <button class="drum-pad" id="X">
        Kick
      </button>
      <button class="drum-pad" id="C">
        Closed HH
      </button> */}
    </div>
  );
};
