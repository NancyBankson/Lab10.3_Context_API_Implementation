import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";

export function FitlerButtons() {
    const { setFilter } = useContext(FilterContext);

    const handleFilter = (event) => {
        const filter = event.target.value;
        setFilter(filter);
    };

    return (
        <>
            <label htmlFor="status">Filter:</label>
            <button value="All" onClick={() => handleFilter(event)}>All</button>
            <button value="Active" onClick={() => handleFilter(event)}>Active</button>
            <button value="Completed" onClick={() => handleFilter(event)}>Completed</button>
        </>
    )
}