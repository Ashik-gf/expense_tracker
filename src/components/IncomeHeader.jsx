import React, { useState } from 'react'

const IncomeHeader = ({ onSelected, onSort }) => {
    const [openFilter, setOpenFilter] = useState(false)
    const [openShort, setOpenShort] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState([])

    const handelChange = (event) => {
        const newCategory = event.target.name;
        const isAlreadySelected = selectedCategory.includes(newCategory);

        if (isAlreadySelected) {
            // Remove the category from selection if it's already checked
            setSelectedCategory(selectedCategory.filter((cat) => cat !== newCategory));
        } else {
            // Add the category to selection if it's newly checked
            setSelectedCategory([...selectedCategory, newCategory]);
        }

    }
    // shortahndel 
    const handelSort = (value) => {
        onSort(value);
        setOpenShort(false)
    }
    onSelected(selectedCategory)
    return (
        <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
            <div className="flex items-center gap-2">

                <div
                    className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="mx-auto">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                    </svg>
                </div>
                {/* <!-- Text --> */}
                <div>
                    <h3 className="text-xl font-semibold leading-7 text-gray-800">Income</h3>
                </div>
            </div>
            <div>
                {/* <!-- Sorting --> */}
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            onClick={() => setOpenShort(!openShort)}

                            type="button"
                            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            id="menu-button" aria-expanded="true" aria-haspopup="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 6l9 0" />
                                <path d="M4 12l7 0" />
                                <path d="M4 18l7 0" />
                                <path d="M15 15l3 3l3 -3" />
                                <path d="M18 6l0 12" />
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`${openShort ? "" : "hidden"} ${openFilter && "hidden"} absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div
                            onClick={() => setOpenShort(!openShort)}
                            className="py-1" role="none">
                            <button
                                onClick={() => handelSort("lth")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                                role="menuitem" tabIndex="-1" id="menu-item-0">Low to High</button>
                            <button onClick={() => handelSort("htl")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                                role="menuitem" tabIndex="-1" id="menu-item-0">High to Low</button>
                        </div>
                    </div>
                </div>

                {/* <!-- Filtering --> */}
                <div className={`relative inline-block  text-left`} >
                    <div>
                        <button
                            onClick={() => setOpenFilter(!openFilter)}
                            type="button"
                            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            id="filter-button" aria-expanded="true" aria-haspopup="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-alt">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 8h4v4h-4z" />
                                <path d="M6 4l0 4" />
                                <path d="M6 12l0 8" />
                                <path d="M10 14h4v4h-4z" />
                                <path d="M12 4l0 10" />
                                <path d="M12 18l0 2" />
                                <path d="M16 5h4v4h-4z" />
                                <path d="M18 4l0 1" />
                                <path d="M18 9l0 11" />
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`${openFilter ? "" : "hidden"} absolute  right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                        role="menu" aria-orientation="vertical" aria-labelledby="filter-button" tabIndex="-1"
                        id="filter-dropdown">
                        <div className="py-1" role="none">
                            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                <input
                                    name='salary'
                                    onChange={handelChange}
                                    type="checkbox" className="htmlForm-checkbox h-4 w-4 rounded-md text-gray-600"
                                    id="filter-option-1" />
                                <span className="ml-2">Salary</span>
                            </label>
                            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                <input
                                    name='outsourcing'
                                    onChange={handelChange}
                                    type="checkbox" className="htmlForm-checkbox h-4 w-4 rounded-md text-gray-600"
                                    id="filter-option-2" />
                                <span className="ml-2">Outsourcing</span>
                            </label>
                            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                <input
                                    name='bond'
                                    onChange={handelChange}
                                    type="checkbox" className="htmlForm-checkbox h-4 w-4 rounded-md text-gray-600"
                                    id="filter-option-3" />
                                <span className="ml-2">Bond</span>
                            </label>

                            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                <input
                                    name='dividend'
                                    onChange={handelChange}
                                    type="checkbox" className="htmlForm-checkbox h-4 w-4 rounded-md text-gray-600"
                                    id="filter-option-3" />
                                <span className="ml-2">Dividend</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncomeHeader