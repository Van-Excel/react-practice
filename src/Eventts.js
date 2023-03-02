import React from 'react';

//event propagation and how to stop it

function Button({ onClick, children }) {
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation(); onClick();
        }}
      >
        {children}
      </button>
    </div>
  );
}

export default function Eventts() {
  return (
    <div onClick={() => alert('you clicked a button')}>
      <Button onClick={() => alert('playing')}>Play Movie </Button>
      <Button onClick={() => alert('uploading')}>Play Movie </Button>
    </div>
  );
}
