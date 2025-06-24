import React from 'react';
import Date from '../ExpenseDate/ExpenseDate';
import './Item.css';
import { BsPencilSquare } from 'react-icons/bs';

export default function Item({ date, title, amount }) {
    const handleBtn = () => alert('Clicked!');

    return (
        <div className="expense-item">
            <Date date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {amount}</div>
                <BsPencilSquare onClick={handleBtn} style={{ cursor: 'pointer' }} />
            </div>
        </div>
    );
}
