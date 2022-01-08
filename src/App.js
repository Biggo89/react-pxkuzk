import React from 'react';
import './style.css';
import Ex from './components/Expenses';

export default function App() {
  const array = [
    { amount: 123, title: 'first' },
    // { amount: 12, title: 'second' },
    // { amount: 34, title: 'third' },
  ];
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Ex expenses={array}></Ex>
    </div>
  );
}
