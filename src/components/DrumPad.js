import React from "react";

import drumPadProperties from "../constants/drumPadProperties";
import { DrumMachineButton } from "./DrumMachineButton";

export const DrumPad = () => {
  const playAudio = (audioUrl) => {
    let audio = new Audio(audioUrl);
    audio.play();
  };
  return (
    <div>
      {drumPadProperties.map(({ id, buttonLabel, audioUrl, displayValue }) => {
        return (
          <DrumMachineButton
            id={id}
            buttonLabel={buttonLabel}
            playAudio={() => playAudio(audioUrl)}
            displayValue={displayValue}
          />
        );
      })}
    </div>
  );
};
