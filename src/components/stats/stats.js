import React from 'react';
import './stats.css';

export default function Stats({ headChange, middleChange, pantsChange, catchphrases }) {
  return (
    <div>
      <div className='counter'>
        <p>
          You have changed heads {headChange} times,
          you have changed the middle {middleChange} times
          and you have changed the pants {pantsChange} times.
        </p>
      </div>
      <div className='catchphraseDisplay'>
        <h3>
        catchphrases
        </h3>
        <ul>
          {catchphrases.map((catchphrase) => (
            <li key={catchphrase}>{catchphrase}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
