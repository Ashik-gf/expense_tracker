import React, { useState } from 'react';
// Salary, Outsourcing, Bond, Dividend 
const FromIncome = ({ onSaveIncome, onUpdateIncome }) => {
    let counter = 0;
    const [income, setIncom] = useState(onUpdateIncome || {
        id: crypto.randomUUID() + counter++,
        category: "",
        date: "",
        amount: ""

    })
    const [isAdd, setIsAdd] = useState(Object.is(onUpdateIncome, null))
    const handelChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        setIncom({
            ...income,
            [name]: value,
        }

        )
    }

    return (
        <form>
            {/* category */}
            <div className="mt-3">
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                <div className="mt-2">
                    <select
                        id="category"
                        name="category"

                        value={income.category || " "}
                        onChange={handelChange}

                        className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6">
                        <option disabled value={" "}>Choese Category</option>
                        <option>Salary</option>
                        <option>Outsourcing</option>
                        <option>Bond</option>
                        <option>Dividend</option>
                    </select>
                </div>
            </div>
            {/* amount */}
            <div className="mt-3">
                <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">Amount</label>
                <div className="mt-2">
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        autoComplete="off"
                        placeholder="12931"
                        value={income.amount}
                        onChange={handelChange}
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
                        value={income.date}
                        onChange={handelChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <button
                type="button"
                onClick={() => onSaveIncome(income, setIncom)}
                className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full">
                {isAdd ? "Save" : "Update"}
            </button>
        </form>
    )
}

export default FromIncome