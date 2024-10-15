import React from 'react';

const TotalExpenseBord = ({ incomes, expenses }) => {
    function calculateTotalAmount(incomes) {
        return incomes.reduce((total, item) => {
            const amount = parseFloat(item.amount);
            if (!isNaN(amount)) {
                total += amount;
            }
            return total;
        }, 0);
    }
    const totalAmount = calculateTotalAmount(incomes);
    function calculateTotalExpenseAmount(expenses) {
        return expenses.reduce((total, item) => {
            const amount = parseFloat(item.amount);
            if (!isNaN(amount)) {
                total += amount;
            }
            return total;
        }, 0);
    }
    const totalExpensesAmount = calculateTotalExpenseAmount(expenses);

    const totalBalance = (totalAmount - totalExpensesAmount)
    const balance = totalBalance < 0 ? "text-red-500" : "text-gray-500"
    console.log(balance);

    return (

        <div className="bg-white">
            <div className="mx-auto max-w-7xl">
                <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
                    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
                        <dt className="text-base leading-7 text-gray-600">Balance</dt>
                        <dd className={`order-first text-xl font-semibold tracking-tight ${balance} sm:text-3xl `}>BDT {totalBalance}</dd>
                    </div>
                    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
                        <dt className="text-base leading-7 text-gray-600">Total Income</dt>
                        <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">BDT {totalAmount}</dd>
                    </div>
                    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
                        <dt className="text-base leading-7 text-gray-600">Total Expense</dt>
                        <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">BDT {totalExpensesAmount}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default TotalExpenseBord