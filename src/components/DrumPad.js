import React from "react";

import drumPadProperties from "../constants/drumPadProperties";
import { DrumMachineButton } from "./DrumMachineButton";

export const DrumPad = ({ setDisplayText }) => {
  const playAudio = (audioUrl) => {
    let audio = new Audio(audioUrl);
    audio.play();
  };
  return (
    <div className="drum-pad">
      {drumPadProperties.map(({ id, buttonLabel, audioUrl, displayValue }) => {
        return (
          <DrumMachineButton
            id={id}
            buttonLabel={buttonLabel}
            playAudio={() => playAudio(audioUrl)}
            displayValue={displayValue}
            key={id}
            setDisplayText={setDisplayText}
          />
        );
      })}
    </div>
  );
};
