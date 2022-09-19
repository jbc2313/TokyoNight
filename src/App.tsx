import type { Component } from 'solid-js';
import Comp from './Comp';
import Nav from './components/Nav';

const App: Component = () => {
  return (
    <>
      <h1>Hello world!!!!</h1>
      <Comp />
      <Nav />
    </>
  );
};

export default App;
