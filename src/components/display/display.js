import React from 'react';

import './display.css';

export default function Display({ head, middle, pants }) {
  return (
    <div className='character'>
      <div>
        <img src={`${process.env.PUBLIC_URL}/pics/${head}-head.png`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/pics/${middle}-middle.png`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/pics/${pants}-pants.png`} />
      </div>
    </div>
  );
}
