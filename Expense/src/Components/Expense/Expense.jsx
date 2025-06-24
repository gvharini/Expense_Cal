import React, { useState } from 'react';
import Item from '../Item/Item';
import Filter from '../Filter/Filter';
import './Expense.css';

export default function Expense({ data }) {
    const [filteredYear, setFilteredYear] = useState('');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpensesByYear = filteredYear
        ? data.filter((expense) => {
              const expenseDate = new Date(expense.date);
              return (
                  !isNaN(expenseDate) &&
                  expenseDate.getFullYear().toString() === filteredYear
              );
          })
        : data;

    const expenseContentList =
        filteredExpensesByYear.length === 0 ? (
            <h4 style={{ color: '#e2e2e2' }}>No Expenses Found!</h4>
        ) : (
            filteredExpensesByYear.map((eachItem) => (
                <Item
                    key={eachItem.id}
                    date={eachItem.date}
                    title={eachItem.title}
                    amount={eachItem.amount}
                />
            ))
        );

    return (
        <div className="expenses">
            <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expenseContentList}
        </div>
    );
}
