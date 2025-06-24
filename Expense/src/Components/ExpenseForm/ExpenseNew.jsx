import React from 'react';
import ExpenseForm from './ExpenseForm';
import './ExpenseNew.css';

export default function ExpenseNew({ onAddExpenseData }) {
    const onSaveExpenseDataFormHandler = (savedExpenseFormData) => {
        const finalExpenseData = {
            ...savedExpenseFormData,
            id: Math.random().toString(),
        };
        onAddExpenseData(finalExpenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDataForm={onSaveExpenseDataFormHandler} />
        </div>
    );
}
