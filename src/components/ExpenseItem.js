import React, { useState } from 'react';
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.item.title);

  const changeTitle = () => {
    setTitle('updated');
  };
  console.log('debug');
  return (
    <p>
      {title} - {props.item.amount}{' '}
      <button onClick={changeTitle}>changeTitle</button>
    </p>
  );
};
export default ExpenseItem;
