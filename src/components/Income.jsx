import React, { useState } from 'react';
import IncomeHeader from './IncomeHeader';
import IncomeList from './IncomeList';

const Income = ({ incomes, onDelete }) => {
    const [selectedFilter, setSelectedFilter] = useState([]);
    const [shortData, setShortData] = useState([])
    const handelSelectedFilter = (selectedCategory) => {
        setSelectedFilter(selectedCategory)
    }
    const handelSort = (d) => {
        const shortedeExpense = [...incomes].sort((a, b) => (a.amount - b.amount));
        if (d == 'lth') {
            return setShortData(shortedeExpense);
        } else if (d == "htl") {
            return setShortData([...incomes].sort((a, b) => (b.amount - a.amount)))
        }
        return true
    }

    return (
        <div className="border rounded-md relative">
            <IncomeHeader
                onSelected={handelSelectedFilter}
                onSort={handelSort}
            />
            <div className="p-4 divide-y">
                {
                    shortData.length > 0 ? <IncomeList
                        selectedFilter={selectedFilter}
                        incomes={shortData}
                        onDelete={onDelete}
                    /> : <IncomeList
                        selectedFilter={selectedFilter}
                        incomes={incomes}
                        onDelete={onDelete}
                    />
                }

            </div>
        </div>
    )
}

export default Income