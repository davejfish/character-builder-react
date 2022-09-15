import React from 'react';
import { useState } from 'react';

import Display from '../display/display';
import Controls from '../controls/controls';
import Catchphrases from '../catchphrases/catchphrases';
import Stats from '../stats/stats';

import './main.css';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [pants, setPants] = useState('blue');
  const [headChange, setHeadChange] = useState(0);
  const [middleChange, setMiddleChange] = useState(0);
  const [pantsChange, setPantsChange] = useState(0);
  const [catchphrases, setCatchphrases] = useState([]);

  return (
    <main className='section'>
      <div className='left'>
        <Controls 
          setHead={setHead} 
          setMiddle={setMiddle} 
          setPants={setPants}
          setHeadChange={setHeadChange}
          setMiddleChange={setMiddleChange}
          setPantsChange={setPantsChange}
        />
        <Catchphrases setCatchphrases={setCatchphrases} catchphrases={catchphrases}/>
        <Stats 
          headChange={headChange} 
          middleChange={middleChange} 
          pantsChange={pantsChange}
          catchphrases={catchphrases}/>
      </div>
      <div className='right'>
        <Display 
          head={head} 
          middle={middle} 
          pants={pants}
        />
      </div>
    </main>
  );
}
