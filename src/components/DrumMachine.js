import React, { useState } from "react";

import { DrumMachineDisplay } from "./DrumMachineDisplay";
import { DrumPad } from "./DrumPad";

export const DrumMachine = () => {
  const [displayText, setDisplayText] = useState("");

  return (
    <div id="drum-machine">
      <div>
        <h1 id="app-header">Drum Machine</h1>
      </div>
      <div className="drum-machine-content">
        <DrumPad setDisplayText={setDisplayText} />
        <DrumMachineDisplay displayText={displayText} />
      </div>
    </div>
  );
};
