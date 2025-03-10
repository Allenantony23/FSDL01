// src/App.js
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Greeting name="Allen" />
      <Greeting name="Eric" />
      <Counter />
      <Form />
    </div>
  );
}

export default App;