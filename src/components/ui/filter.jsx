import React from "react";

const Filter = ({ filterState, dispatch, types }) => {
    const handleSearchChange = (e) => {
        dispatch({ type: "SET_SEARCH", payload: e.target.value });
    };

    const handleTypeChange = (e) => {
        const selectedType = e.target.value;
        dispatch({ type: "SET_TYPE", payload: selectedType });
    };

    const handleLimitChange = (e) => {
        const value = parseInt(e.target.value, 10);
        dispatch({ type: "SET_LIMIT", payload: isNaN(value) ? 50 : value });
    };

    return (
        <div className="flex flex-wrap gap-4 items-center p-4">
            <div className="flex-1">
                <input
                    type="text"
                    value={filterState.search}
                    onChange={handleSearchChange}
                    placeholder="Rechercher"
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>

            <div className="flex-1">
                <select
                    id="type-selector"
                    value={filterState.type || ""}
                    onChange={handleTypeChange}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="">Types</option>
                    {types.map((type) => (
                        <option key={type.id} value={type.id}>
                            {type.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex-1">
                <select
                    id="limit-selector"
                    value={filterState.limit}
                    onChange={handleLimitChange}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
