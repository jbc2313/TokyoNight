import type { Component } from 'solid-js';
//import { lazy } from 'solid-js';
// you can lazy load route components if you want
import { Routes, Route } from '@solidjs/router';
import Comp from './Comp';
import Nav from './components/Nav';
import Tokyo from './components/Tokyo';
import Art from './components/Art';

const App: Component = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/tokyo' component={Tokyo} />
        <Route path='/about' component={Comp} />
        <Route path='/colorizer' component={Art} />
      </Routes>

    </>
  );
};

export default App;
