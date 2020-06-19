import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PianoKeyWhite from './PianoKeyWhite'
import PianoKeyBlack from './PianoKeyBlack'
import { whiteKeys, blackKeys, whiteKeysMapping, blackKeysMapping } from './../CONST/key'

const Piano = () => {
  const [highlightKey, setHighLightKey] = useState('null')

  const play = config => window.piano.play(config[0], config[1], 2);
  const keyBlacksComponents = blackKeys.map((config, index) => {
    return <PianoKeyBlack
      key={index}
      highlightKey={highlightKey}
      style={{ left: config[2] + 'px', top: '5px' }}
      config={config}
      play={play}
    />
  });

  const keyWhitesComponents = whiteKeys.map((config, index) => {
    return <PianoKeyWhite
      key={index}
      highlightKey={highlightKey}
      config={config}
      play={play}
    />
  });

  const playPiano = event => {
    const { key } = event
    const config = whiteKeysMapping[key] || blackKeysMapping[key]
    console.log('----key:', {
      key,
      config
    })

    if (config) {
      const highlightHash = {
        key: config[0] + config[1],
        uuid: uuidv4()
      }
      setHighLightKey(highlightHash)
      play(config)
    }
  }

  useEffect(() => {
    const doc = window.document.body
    doc.addEventListener('keypress', playPiano)

    return () => {
      doc.removeEventListener('keypress', playPiano)
    }
  }, [])

  return (
    <div className="page">
      <div className="piano">
        { keyBlacksComponents }
        <div>
          { keyWhitesComponents }
        </div>
      </div>
    </div>
  );
}

export default Piano
