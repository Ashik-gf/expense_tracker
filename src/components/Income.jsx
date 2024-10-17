import React, { useState } from 'react';
import IncomeHeader from './IncomeHeader';
import IncomeList from './IncomeList';

const Income = ({ incomes, onDelete, onIncomeEdit }) => {
    const [selectedFilter, setSelectedFilter] = useState([]);
    const [shortData, setShortData] = useState([])
    const handelSelectedFilter = (selectedCategory) => {
        setSelectedFilter(selectedCategory)
    }
    const handelSort = (d) => {
        setShortData(d)
    }

    return (
        <div className="border rounded-md relative">
            <IncomeHeader
                onSelected={handelSelectedFilter}
                onSort={handelSort}
            />
            <div className="p-4 divide-y">
                {
                    incomes.length > 0 ? <IncomeList
                        selectedFilter={selectedFilter}
                        incomes={incomes}
                        onDelete={onDelete}
                        shortData={shortData}
                        onIncomeEdit={onIncomeEdit}

                    /> : <p className=' text-red-500'>
                        No Income Update
                    </p>
                }
            </div>
        </div>
    )
}

export default Income