import React from 'react';
import { useState } from 'react';
import './catchphrase.css';

export default function Catchphrases({ setCatchphrases }) {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const handleSavePhrase = () => {
    setCatchphrases((prevState) => [currentPhrase, ...prevState]);
    setCurrentPhrase('');
  };

  return (
    <div>
      <label className='displayContents'>
          your catchphrases:
        <input onChange={(e) => setCurrentPhrase(e.target.value)} />
      </label>
      <button className='submit' onClick={handleSavePhrase}>submit</button>
      
    </div>
  );
}

//making some changes to stage this