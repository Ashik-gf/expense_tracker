import React, { useState } from 'react';

const FromExpense = ({ onSaveExpense, updateExpense, onCancel }) => {
    const [updateToex, setUpdateToex] = useState(updateExpense)

    const [expense, setExpense] = useState(updateToex || {
        id: crypto.randomUUID(),
        category: "",
        date: "",
        amount: ""

    })
    const [isAdd, setIsAdd] = useState(Object.is(updateExpense, null))
    console.log(updateExpense);
    const handelExpanseChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        setExpense({
            ...expense,
            [name]: value,
        })
    }

    return (
        <form>

            <div className="mt-3">
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                <div className="mt-2">
                    <select
                        id="category"
                        name="category"
                        // autoComplete="category-name"
                        value={expense.category || " "}
                        onChange={handelExpanseChange}
                        className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6">
                        <option disabled value={" "} >Choese Category</option>
                        <option>Education</option>
                        <option>Food</option>
                        <option>Health</option>
                        <option>Bill</option>
                        <option>Insurance</option>
                        <option>Tax</option>
                        <option>Transport</option>
                        <option>Telephone</option>
                    </select>
                </div>
            </div>

            <div className="mt-3">
                <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">Amount</label>
                <div className="mt-2">
                    <input type="number"
                        name="amount"
                        id="amount"
                        autoComplete="off"
                        placeholder="12931"
                        value={expense.amount}
                        onChange={handelExpanseChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div className="mt-3">
                <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
                <div className="mt-2">
                    <input
                        type="date"
                        name="date"
                        id="date"
                        autoComplete="off"
                        placeholder="12931"
                        value={expense.date}
                        onChange={handelExpanseChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <button
                type="button"
                onClick={() => onSaveExpense(expense, isAdd)}
                className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full" >
                {isAdd ? "Save" : "Update"}

            </button>
            {
                !isAdd && <button
                    onClick={() => onCancel('cancelExpense')}
                    className="mt-6 rounded-md bg-red-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
                >
                    Cancel
                </button>
            }
        </form>
    )
}

export default FromExpense