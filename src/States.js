import React from 'react';
import { useState } from 'react';

export default function States() {
  const [name, setShow] = useState(true);

  function IncreaseName() {
    setShow(!name)
  }

  return (
    <div>
      
      {name ?<h1>Hi my name is Vanexcel</h1> : <h1>username is hidden</h1>}
      <p>
      <button onClick = {IncreaseName}>SHow/Hide</button></p>
    </div>
  );
}
