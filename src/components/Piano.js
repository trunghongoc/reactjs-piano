import React from 'react';
import PianoKeyWhite from './PianoKeyWhite';
import PianoKeyBlack from './PianoKeyBlack';

const Piano = () => {
  const keyWhites = [
    ['C', 3],
    ['D', 3],
    ['E', 3],
    ['F', 3],
    ['G', 3],
    ['A', 3],
    ['B', 3],

    ['C', 4],
    ['D', 4],
    ['E', 4],
    ['F', 4],
    ['G', 4],
    ['A', 4],
    ['B', 4],

    ['C', 5],
    ['D', 5],
    ['E', 5],
    ['F', 5],
    ['G', 5],
    ['A', 5],
    ['B', 5],
  ];

  const keyBlacks = [
    ['C#', 3, 26],
    ['D#', 3, 68],

    ['F#', 3, 152],
    ['G#', 3, 194],
    ['A#', 3, 236],

    ['C#', 4, 320],
    ['D#', 4, 362],

    ['F#', 4, 446],
    ['G#', 4, 488],
    ['A#', 4, 530],

    ['C#', 5, 614],
    ['D#', 5, 656],

    ['F#', 5, 740],
    ['G#', 5, 782],
    ['A#', 5, 824],
  ];
  const play = config => window.piano.play(config[0], config[1], 2);
  const keyBlacksComponents = keyBlacks.map((config, index) => {
    return <PianoKeyBlack
      key={index}
      style={{ left: config[2] + 'px', top: '5px' }}
      config={config}
      play={play}/>
  });

  const keyWhitesComponents = keyWhites.map((config, index) => {
    return <PianoKeyWhite
      key={index}
      config={config}
      play={play}/>
  });

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

export default Piano;
