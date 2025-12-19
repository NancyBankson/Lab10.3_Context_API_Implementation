import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";

export function FitlerButtons() {
    const { setFilter } = useContext(FilterContext);

    const handleFilter = (event) => {
        // Update state when the input changes
        setFilter(event.target.value);
    };

    return (
        <>
            <label htmlFor="status">Filter:</label>
            <button value="All" onClick={() => handleFilter()}>All</button>
            <button value="Active" onClick={() => handleFilter()}>Active</button>
            <button value="Completed" onClick={() => handleFilter()}>Completed</button>
            {/* <select id="status-input" name="status" value={filter} onChange={handleFilter}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select> */}
        </>
    )
}