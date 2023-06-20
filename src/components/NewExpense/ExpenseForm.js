import { useState, useRef } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const titleInputRef = useRef();
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();             // prevent page from reloading when button is clicked
        const expenseData = {
            title: titleInputRef.current.value,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' ref={titleInputRef} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
