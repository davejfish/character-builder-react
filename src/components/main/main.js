import React from 'react';
import { useState } from 'react';

import Display from '../Display/Display';
import Controls from '../Controls/Controls';
import Catchphrases from '../Catchphrases/Catchphrases';
import Stats from '../Stats/Stats';

import './main.css';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [pants, setPants] = useState('blue');

  return (
    <main>
      <div className='left'>
        <Controls />
        <Catchphrases />
        <Stats />
      </div>
      <div className='right'>
        <Display />
      </div>
    </main>
  );
}
