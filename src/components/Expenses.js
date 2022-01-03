import React from 'react';
import ExItem from './ExpenseItem';
const Expenses = (props) => {
  return (
    props.expenses.map(e => {
      return <ExItem item={e} />
    })
  )
};

export default Expenses;
