import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";

export function FitlerButtons() {
    const { setFilter } = useContext(FilterContext);

    const handleAllFilter = (event) => {
        const allFilter = event.target.value;
        setFilter(allFilter);
    };

    const handleActiveFilter = (event) => {
        const activeFilter = event.target.value;
        setFilter(activeFilter);
    };

    const handleCompletedFilter = (event) => {
        const completedFilter = event.target.value;
        setFilter(completedFilter);
    };

    return (
        <>
            <label htmlFor="status">Filter:</label>
            <button value="All" onClick={() => handleAllFilter(event)}>All</button>
            <button value="Active" onClick={() => handleActiveFilter(event)}>Active</button>
            <button value="Completed" onClick={() => handleCompletedFilter(event)}>Completed</button>
            {/* <select id="status-input" name="status" value={filter} onChange={handleFilter}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select> */}
        </>
    )
}