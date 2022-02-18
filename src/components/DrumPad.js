import React from "react";

import drumPadProperties from "../constants/drumPadProperties";
import { DrumMachineButton } from "./DrumMachineButton";

export const DrumPad = () => {
  return (
    <div>
      {drumPadProperties.map(({ id, textValue }) => {
        return <DrumMachineButton id={id} textValue={textValue} />;
      })}
    </div>
  );
};
