import React, { useState } from 'react'
import Expense from './Expense'
import ExpenseFrom from './ExpenseFrom'
import Income from './Income'
import TotalExpenseBord from './TotalExpenseBord'
const initialIncome = []
const initialExpenses = []
const ExpenseBord = () => {
    const [incomes, setIncome] = useState(initialIncome);
    const [expenses, setExpenses] = useState(initialExpenses)


    const handelIncome = (newIncome) => {
        // Find if an existing income has the same ID
        const existingIncome = incomes.find((income) => income.id === newIncome.id);

        // Only add if no existing income has the same ID
        if (!existingIncome) {
            setIncome([...incomes, newIncome]);
        } else {
            alert(` "This Category Already Add on Board"`)
        }
    };


    const handelExoense = (newExpense) => {
        const existingExpense = expenses.find((expense) => expense.id === newExpense.id)
        if (!existingExpense) {
            setExpenses([
                ...expenses,
                newExpense
            ])
        } else {
            alert(` "This Category Already Add on Board"`)
        }

    }
    const handelDelete = (id) => {
        const newIncome = incomes.filter(income => income.id !== id);
        setIncome(newIncome)
    }

    return (
        <main className="relative mx-auto mt-10 w-full max-w-7xl">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ExpenseFrom
                    onSaveIncome={handelIncome}
                    onSaveExpense={handelExoense}
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
                        />
                        <Expense
                            expenses={expenses}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ExpenseBord