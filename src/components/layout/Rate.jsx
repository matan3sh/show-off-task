import React from 'react';

const Rate = ({ rate }) => {
  return (
    <div className='stars-outer'>
      <div className='stars-inner' style={{ width: `${rate}%` }}></div>
    </div>
  );
};

export default Rate;
