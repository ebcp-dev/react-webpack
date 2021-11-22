import React, { useState } from 'react';

import './Counter.scss';

import CustomButton from '../../../../components/CustomButton/CustomButton';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onCounterClick = () => setCounter(counter + 1);

  return (
    <div>
      <CustomButton onClick={onCounterClick}>
        Redux Counter: {counter}
      </CustomButton>
    </div>
  );
};

export default Counter;
