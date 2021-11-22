import React from 'react';

import './Home.scss';

import Counter from './components/Counter/Counter';

const Home = () => {
  return (
    <div>
      <h1>Welcome to App Home!</h1>
      <Counter></Counter>
    </div>
  );
};

export default Home;
