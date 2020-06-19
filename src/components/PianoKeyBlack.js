import React, { useEffect, useState } from 'react'

const PianoKeyBlack = ({ config, play, style, highlightKey }) => {
  const defaultClasses = 'piano-keys key-black'
  const highlightClass = 'key-highlight'
  const [classes, setClasses] = useState(defaultClasses)

  useEffect(() => {
    const currentKey = config[0] + config[1]
    if (highlightKey.key === currentKey) {
      setClasses(defaultClasses + ' ' + highlightClass)
    } else {
      setClasses(defaultClasses)
    }
    setTimeout(() => setClasses(defaultClasses), 500)
  }, [highlightKey])

  return (
    <div
      style={style}
      className={classes}
      onClick={() => play(config)}>
      <div className="key">{ config[3].toUpperCase() }</div>
      <div className="node">{ config[0] + config[1] }</div>
    </div>
  );
};

export default PianoKeyBlack;
