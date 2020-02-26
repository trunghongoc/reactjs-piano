import React from 'react';

const PianoKeyBlack = ({ config, play, style }) => {
  return (
    <div
      style={style}
      className="piano-keys key-black"
      onClick={() => play(config)}>

      <div className="node">{ config[0] + config[1] }</div>
    </div>
  );
};

export default PianoKeyBlack;
