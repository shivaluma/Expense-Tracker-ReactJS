import React from 'react';

export default params => {
  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        <li className='expense'>
          Cash <span>$13.00</span>
        </li>
        <li className='income'>
          Cash <span>$15.00</span>
        </li>
      </ul>
    </>
  );
};
