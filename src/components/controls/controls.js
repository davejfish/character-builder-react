import React from 'react';

import './controls.css';

export default function Controls({ setHead, setMiddle, setPants }) {
  return (
    <div className='controls'>
      <form>
        <label>
          head:
          <select onClick={(e) => setHead(e.target.value)}>
            <option value='bird'>bird</option>
            <option value='dog'>dog</option>
            <option value='duck'>duck</option>
            <option value='horse'>horse</option>
          </select>
        </label>
        <label>
          middle:
          <select onClick={(e) => setMiddle(e.target.value)}>
            <option value='blue'>blue</option>
            <option value='dress'>dress</option>
            <option value='pink'>pink</option>
            <option value='red'>red</option>
          </select>
        </label>
        <label>
          pants:
          <select onClick={(e) => setPants(e.target.value)}>
            <option value='blue'>blue</option>
            <option value='dog'>dog</option>
            <option value='leg'>leg</option>
            <option value='white'>white</option>
          </select>
        </label>
      </form>
    </div>
  );
}
