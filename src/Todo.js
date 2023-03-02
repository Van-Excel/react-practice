import React from 'react';
import { useState } from 'react';

//todo list app

export default function Todo() {
  const [Input, InputValue] = useState('');
  const [todolist, newtodolist] = useState([]);

  const addtask = () => {
    const arr = [...todolist, Input];
    newtodolist(arr);
  };

  const deletetask = () => {};

  const taskitems = todolist.map((todo) => (
    <div>
      <ul>
        {todo}
        <button>delete</button>
      </ul>
    </div>
  ));

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => InputValue(e.target.value)} />
        <button onClick={addtask}>add task</button>
      </div>

      <div>
        <li> {taskitems}</li>
      </div>
    </div>
  );
}
