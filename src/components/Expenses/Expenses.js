import './Expenses.css';
import { useState, Fragment } from 'react';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

function Expenses(props) {
    const [theYear, setTheYear] = useState('2023');
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === theYear;
    });

    const filterHandler = selYear => {
        setTheYear(selYear);
    };

    return (
        <Fragment>
            <Card className="expenses">
                <ExpensesFilter
                    selected={theYear}
                    onChangeFilter={filterHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </Fragment>
    );
}

export default Expenses;