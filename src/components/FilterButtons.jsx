import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";
import { ThemeContext } from "../Context/ThemeContext";

export function FitlerButtons() {
    const { setFilter } = useContext(FilterContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleFilter = (event) => {
        const filter = event.target.value;
        setFilter(filter);
    };

    return (
        <>
            <label htmlFor="status">Filter:</label>
            <button className={(theme === "Dark") ? 'dark-mode' : null} value="All" onClick={() => handleFilter(event)}>All</button>
            <button className={(theme === "Dark") ? 'dark-mode' : null} value="Active" onClick={() => handleFilter(event)}>Active</button>
            <button className={(theme === "Dark") ? 'dark-mode' : null} value="Completed" onClick={() => handleFilter(event)}>Completed</button>
            <label htmlFor="theme">Toggle Theme:</label>
            <button className={(theme === "Dark") ? 'dark-mode' : null} onClick={toggleTheme}>{theme}</button>
        </>
    )
}