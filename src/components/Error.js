import React from 'react';

export default function Error(props) {
  return (
    <div id='fixed-error-container'>
      <div id='error'>
        <div>Could not find {props.city}</div>
        <button onClick={props.handleClick}>Ok</button>
      </div>
    </div>
  );
};