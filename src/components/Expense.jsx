import React, { useState } from 'react';
import ExpenseHeader from './ExpenseHeader';
import ExpenseList from './ExpenseList';

const Expense = ({ expenses }) => {
    const [filterExpense, setFilterExpense] = useState([]);
    const [lowTohigh, setLowtoHigh] = useState('');
    const [shortData, setShortData] = useState([]);
    const handelFilter = (selectedExpense) => {
        setFilterExpense(selectedExpense)
    }
    const handelSort = (d) => {
        const shortedeExpense = [...expenses].sort((a, b) => (a.amount - b.amount));
        if (d == 'lth') {
            return setShortData(shortedeExpense);
        } else if (d == "htl") {
            return setShortData([...expenses].sort((a, b) => (b.amount - a.amount)))
        }
        return true
    }
    return (
        <div className="border rounded-md">
            {/* <!-- Header --> */}
            <ExpenseHeader onShort={handelSort} onFilter={handelFilter} />
            {/* expenseList */}
            {
                shortData.length > 0 ? <ExpenseList expenses={shortData} filterExpense={filterExpense} /> : <ExpenseList expenses={expenses} filterExpense={filterExpense} />
            }

        </div>
    )
}

export default Expense