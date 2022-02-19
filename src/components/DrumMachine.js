import React, { useEffect } from "react";

import { DrumPad } from "./DrumPad";

export const DrumMachine = () => {
  return (
    <div id="drum-machine">
      <div id="display">
        <DrumPad />
      </div>
    </div>
  );
};
