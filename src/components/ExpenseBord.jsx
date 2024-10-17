import React, { useState } from 'react'
import Expense from './Expense'
import ExpenseFrom from './ExpenseFrom'
import Income from './Income'
import TotalExpenseBord from './TotalExpenseBord'


const ExpenseBord = () => {
    const [incomes, setIncome] = useState([]);
    const [expenses, setExpenses] = useState([])
    const [updateIncome, setUpdateIncome] = useState(null);
    const [updateExpense, setUpdateExpense] = useState(null);
    const [openExpense, setOpenExpense] = useState(false);
    const [formReset, setFormreset] = useState({})
    const handelIncome = (newIncome, isAdd) => {
        console.log(newIncome);
        if (isAdd) {
            setIncome([
                ...incomes,
                newIncome
            ])
        } else {
            setIncome(
                incomes.map((income) => {
                    if (income.id === newIncome.id) {
                        return newIncome;
                    }
                    return income;
                })
            );
            setUpdateIncome(null)
        }
        setOpenExpense(false);
    };


    const handleExpense = (newExpense, isAdd) => {
        if (isAdd) {
            setExpenses([
                ...expenses,
                newExpense
            ])
        } else {
            setExpenses(
                expenses.map((expense) => {
                    if (expense.id === newExpense.id) {
                        return newExpense;
                    }
                    return expense;
                })
            );
            setUpdateExpense(null)
        }
        setOpenExpense(true);

    };
    // income delete
    const handelDelete = (id) => {
        const newIncome = incomes.filter(income => income.id !== id);
        setIncome(newIncome)
    };
    // expense Delte
    const handelExpenseDelete = (id) => {
        const newExpense = expenses.filter((expense) => expense.id !== id)
        setExpenses(newExpense)
    };
    // handelIncomeEditMOdal and Editable data
    const handelEditIncome = (income) => {
        setUpdateIncome(income)
        // for open incomeMOdal
        setOpenExpense(true)
    }
    // handel ExpenseData and state
    const handelEditExpenses = (expense) => {
        setUpdateExpense(expense)
        // for open incomeMOdal
        setOpenExpense(false)

    }




    return (
        <main className="relative mx-auto mt-10 w-full max-w-7xl">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ExpenseFrom
                    onSaveIncome={handelIncome}
                    onSaveExpense={handleExpense}

                    updateIncome={updateIncome}
                    updateExpense={updateExpense}

                    openExpense={openExpense}
                    setOpenExpense={setOpenExpense}

                />
                <div className="lg:col-span-2">
                    <TotalExpenseBord
                        incomes={incomes}
                        expenses={expenses}
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                        <Income
                            incomes={incomes}
                            onDelete={handelDelete}
                            onIncomeEdit={handelEditIncome}

                        />
                        <Expense
                            expenses={expenses}
                            onDelete={handelExpenseDelete}
                            onExpenseEdit={handelEditExpenses}

                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ExpenseBord