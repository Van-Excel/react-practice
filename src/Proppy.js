import React from 'react';

function AlertButton({ onClick, children }) {
  return (
    <div>
      <button onClick={onClick}> {children} </button>
    </div>
  );
}

export default function Proppy() {
  const onButton = () =>{
    console.log('Props are complex')
  }
  return (
    <div>
      <AlertButton onClick={onButton}>Press me</AlertButton>

      <AlertButton onClick ={onButton}>Press me</AlertButton>
    </div>
  );
}
