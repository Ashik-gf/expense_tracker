import React, { useState } from 'react';
import ExpenseHeader from './ExpenseHeader';
import ExpenseList from './ExpenseList';

const Expense = ({ expenses, onDelete, onExpenseEdit }) => {
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
            <div className="p-4 divide-y">
                {
                    expenses.length > 0 ? <ExpenseList
                        onDelete={onDelete}
                        expenses={expenses}
                        filterExpense={filterExpense}
                        shortData={shortData}
                        onExpenseEdit={onExpenseEdit}

                    /> : <p className=' text-red-500'>
                        No Expense Update
                    </p>
                }
            </div>

        </div>
    )
}

export default Expense