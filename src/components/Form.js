import React from 'react';

export default function Form (props) {
  let styles = {
    color: (props.dayStatus) ? '#000000' : '#ffffff'
  }
  return (
    <form onSubmit={props.handleSubmit} id='form'>
      <input style={styles} type='search' placeholder='City' />
    </form>
  );
};