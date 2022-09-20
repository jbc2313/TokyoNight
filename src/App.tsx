import type { Component } from 'solid-js';
import Comp from './Comp';
import Nav from './components/Nav';
import Tokyo from './components/Tokyo';
const App: Component = () => {
  return (
    <>
      <Nav />
      <h1>Hello world!!!!</h1>
      <Comp />
      <Tokyo />
    </>
  );
};

export default App;
