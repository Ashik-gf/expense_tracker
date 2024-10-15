import React, { useState } from 'react';
import ExpenseHeader from './ExpenseHeader';
import ExpenseList from './ExpenseList';

const Expense = ({ expenses, onDelete }) => {
    const [filterExpense, setFilterExpense] = useState([]);
    const [lowTohigh, setLowtoHigh] = useState('');
    const [shortData, setShortData] = useState(expenses);
    const handelFilter = (selectedExpense) => {
        setFilterExpense(selectedExpense)
    }
    const handelSort = (d) => {
        setShortData(d)
    }

    return (
        <div className="border rounded-md">
            {/* <!-- Header --> */}
            <ExpenseHeader onShort={handelSort} onFilter={handelFilter} />
            {/* expenseList */}
            <ExpenseList
                onDelete={onDelete}
                expenses={expenses}
                filterExpense={filterExpense}
                shortData={shortData}
            />

        </div>
    )
}

export default Expense