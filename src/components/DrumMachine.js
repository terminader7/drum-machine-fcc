import React, { useState } from "react";

import { DrumMachineDisplay } from "./DrumMachineDisplay";
import { DrumPad } from "./DrumPad";

export const DrumMachine = () => {
  const [displayText, setDisplayText] = useState("");

  return (
    <div id="drum-machine">
      <h1>Drum App</h1>
      <DrumPad setDisplayText={setDisplayText} />
      <DrumMachineDisplay displayText={displayText} />
    </div>
  );
};
