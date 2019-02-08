import React from 'react';

const Smurf = props => {
  return (
    <div className='smurfCard'>
    <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age} Smurf-Years Old</p>
      <p>{props.smurf.height}cm</p>
    </div>
  )
}

export default Smurf;