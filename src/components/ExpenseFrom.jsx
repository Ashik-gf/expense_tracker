import React from 'react';
import FromExpense from './FormExpense';
import FromIncome from './FromIncome';

const ExpenseFrom = ({ onSaveIncome, onSaveExpense, updateIncome, updateExpense, openExpense, setOpenExpense, onCancel }) => {

    return (
        <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
            <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">Expense Tracker</h2>
            <div
                className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
                {/* expense */}

                <button onClick={() => setOpenExpense(false)} className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${openExpense ? "" : "active"}`}>
                    Expense
                </button>
                {/* income */}
                <button onClick={() => setOpenExpense(true)} className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${openExpense && "active"}`}>
                    Income
                </button>
            </div>
            {
                openExpense ? <FromIncome
                    onSaveIncome={onSaveIncome}
                    onUpdateIncome={updateIncome}
                    onCancel={onCancel}

                /> : <FromExpense
                    onSaveExpense={onSaveExpense}
                    updateExpense={updateExpense}
                    onCancel={onCancel}
                />
            }
        </div>
    )
}

export default ExpenseFrom