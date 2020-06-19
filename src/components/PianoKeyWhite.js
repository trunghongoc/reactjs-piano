import React, { useEffect, useState } from 'react'

const PianoKeyWhite = ({ config, play, highlightKey }) => {
  const defaultClasses = 'piano-keys key-white'
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
      className={classes}
      onClick={() => play(config)}>
      <div className="key">{ config[2].toUpperCase() }</div>
      <div className="node">{ config[0] + config[1] }</div>
    </div>
  );
};

export default PianoKeyWhite;
