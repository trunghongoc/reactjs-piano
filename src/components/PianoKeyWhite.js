import React from 'react';

const PianoKeyWhite = ({ config, play }) => {
  return (
    <div
      className="piano-keys key-white"
      onClick={() => play(config)}>

      <div className="node">{ config[0] + config[1] }</div>
    </div>
  );
};

export default PianoKeyWhite;
