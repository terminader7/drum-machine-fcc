import React from "react";

import drumPadProperties from "../constants/drumPadProperties";
import { DrumMachineButton } from "./DrumMachineButton";

export const DrumPad = () => {
  return (
    <div>
      {drumPadProperties.map(({ id, buttonLabel, audioUrl, displayValue }) => {
        return (
          <DrumMachineButton
            id={id}
            buttonLabel={buttonLabel}
            audioUrl={audioUrl}
            displayValue={displayValue}
          />
        );
      })}
    </div>
  );
};
