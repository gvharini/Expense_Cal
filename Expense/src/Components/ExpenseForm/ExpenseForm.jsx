import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm({ onSaveExpenseDataForm }) {
    const initialData = {
        title: '',
        amount: '',
        date: ''
    };

    const [inputs, setInputs] = useState(initialData);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(inputs);
        onSaveExpenseDataForm(inputs);
        setInputs(initialData);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={inputs.title}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        name="date"
                        value={inputs.date}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        name="amount"
                        min="1"
                        step="1"
                        value={inputs.amount}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}
