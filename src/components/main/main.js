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
    <main className='section'>
      <div className='left'>
        <Controls setHead={setHead} setMiddle={setMiddle} setPants={setPants}/>
        <Catchphrases />
        <Stats />
      </div>
      <div className='right'>
        <Display head={head} middle={middle} pants={pants} />
      </div>
    </main>
  );
}
