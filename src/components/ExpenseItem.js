import React, { useState, useEffect } from 'react';
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.item.title);
  const [count, setCount] = useState(0);

  const changeTitle = (e) => {
    // setTitle((prevState) => {
    //   return prevState + ' updated';
    // });
  };

  useEffect(() => {
    // Update the document title using the browser API
    console.log('useEffect');
  });

  console.log('debug');
  return (
    <p>
      {title} - {props.item.amount}{' '}
      <button onClick={changeTitle}>changeTitle</button>
    </p>
  );
};
export default ExpenseItem;
