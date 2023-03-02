import React from 'react';
import Proppy from './Proppy.js';
import Eventts from './Eventts.js';
import States from './States.js';
import CounterClock from './CounterClock'
import Todo from './Todo.js'
import './style.css';

export default function App() {
  let handleClick = () => {
    console.log('hi');
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>

      <Proppy />

      <Eventts />

      <States />
      <CounterClock />

      <Todo />
    </div>
  );
}
