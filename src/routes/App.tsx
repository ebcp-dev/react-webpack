import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './home/Home';
import Route1 from './route1/Route1';
import SubRoute1 from './route1/subroute1/SubRoute1';
import NotFound from './notfound/NotFound';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/route1">Route1</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="route1" element={<Route1 />}>
            <Route path="subroute1" element={<SubRoute1 />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;