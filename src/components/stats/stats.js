import React from 'react';
import './stats.css';

export default function Stats({ headChange, middleChange, pantsChange }) {
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
        <ul>catchphrases here</ul>
      </div>
    </div>
  );
}
