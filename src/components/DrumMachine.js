import React from "react";
import { DrumMachineButton } from "./DrumMachineButton";

export const DrumMachine = () => {
  return (
    <div id="drum-machine">
      <div id="display">
        <DrumMachineButton id={"Q"} textValue={"Heater 1"} />
      </div>
    </div>
  );
};
