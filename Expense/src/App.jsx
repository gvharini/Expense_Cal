import React, { useState } from 'react';
import Expense from './Components/Expense/Expense';  
import ExpenseNew from './Components/ExpenseForm/ExpenseNew'; 
import data from './data.json';
import Header from './Components/Header/Header';

function App() {
  const [expenses, setExpenses] = useState(data);

  const AddExpenseDataHandler = (expenseData) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  return (
    <div>
      <Header />
      <ExpenseNew onAddExpenseData={AddExpenseDataHandler} />
      <Expense data={expenses} />
    </div>
  );
}

export default App;
