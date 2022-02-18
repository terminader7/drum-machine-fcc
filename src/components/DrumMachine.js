import React from "react";
import { DrumMachineButton } from "./DrumMachineButton";

export const DrumMachine = () => {
  return (
    <div id="drum-machine">
      <div id="display">
        <DrumMachineButton id={"Q"} textValue={"Heater 1"} />
        <DrumMachineButton id={"W"} textValue={"Heater 2"} />
        <DrumMachineButton id={"E"} textValue={"Heater 3"} />
        <DrumMachineButton id={"A"} textValue={"Heater 4"} />
        <DrumMachineButton id={"S"} textValue={"Clap"} />
        <DrumMachineButton id={"D"} textValue={"D"} />
        <DrumMachineButton id={"Z"} textValue={"Kick n'Hat"} />
        <DrumMachineButton id={"X"} textValue={"Kick"} />
        <DrumMachineButton id={"C"} textValue={"Closed HH"} />
      </div>
    </div>
  );
};
