import React from 'react';

import './controls.css';

export default function Controls({ 
  setHead, 
  setMiddle, 
  setPants, 
  setHeadChange,
  setMiddleChange,
  setPantsChange
}) {
  return (
    <div className='controls'>
      <form>
        <label>
          head:
          <select onChange={(e) => {
            setHead(e.target.value);
            setHeadChange(prevState => prevState + 1);
          }}>
            <option value='bird'>bird</option>
            <option value='dog'>dog</option>
            <option value='duck'>duck</option>
            <option value='horse'>horse</option>
          </select>
        </label>
        <label>
          middle:
          <select onChange={(e) => {
            setMiddle(e.target.value);
            setMiddleChange(prevState => prevState + 1);
          }}>
            <option value='blue'>blue</option>
            <option value='dress'>dress</option>
            <option value='pink'>pink</option>
            <option value='red'>red</option>
          </select>
        </label>
        <label>
          pants:
          <select onChange={(e) => {
            setPants(e.target.value);
            setPantsChange(prevState => prevState + 1);
          }}>
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
