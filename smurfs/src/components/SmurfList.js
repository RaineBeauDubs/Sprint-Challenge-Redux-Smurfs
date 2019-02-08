import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
  return (
    <div className='smurfSec'>
      {props.smurfs.map(smurf => {
        return <Smurf 
          smurf={smurf} 
          key={smurf.id}
        />
      })}
    </div>
  );
};

export default SmurfList;