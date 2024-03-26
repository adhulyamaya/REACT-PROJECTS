import React, { useState } from 'react';


function Count() {
  const [data, setData] = useState(0);

  const increment = () => {
    setData(data + 1);
  };

  const decrement = () => {
    setData(data - 1);
  };

  return (
    <>
    <h1>COUNTER APP </h1>
    <br/>
    <div className='count-box'>
      <div className='count-container'>
        <p className='count-text'>Count: {data}</p>
        <div className='button-container'>
          <button className='count-button' onClick={decrement}>-</button>
          <button className='count-button' onClick={increment}>+</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Count;


