# Lab 10.3 Context API Implementation

## Overview

The purpose of this lab was to practice using useContext hook to create a Todo app instead of relying on prop drilling.  The hook was used for the todo list as well as the theme and filters.

## Features

Activity Tasks

1. Core Todo Management (TodoContext)

    - State: An array of todo items. Each todo item should have at least:
        - id: A unique identifier (string or number).
        - text: The content of the todo (string).
        - completed: A boolean indicating if the todo is completed.
    - Actions (exposed via context):
        - addTodo(text: string): Adds a new todo item to the list.
        - toggleTodo(id: string | number): Toggles the completed status of a todo item.
        - deleteTodo(id: string | number): Removes a todo item from the list.
        - editTodo(id: string | number, newText: string): Edits the text of an existing todo item.
        - clearCompleted(): Removes all completed todos.
    - Components:
        - TodoInput: An input field to add new todos.
        - TodoList: Displays the list of todo items.
        - TodoItem: Represents a single todo item, allowing interaction (toggle, delete, edit).

2. Visibility Filters (FilterContext)

    - State: The current visibility filter. Possible values: ‘all’, ‘active’, ‘completed’.
    - Actions (exposed via context):
        - setFilter(filter: string): Sets the current filter.
    - Functionality:
        - The TodoList should display todos based on the currently active filter from FilterContext.
        - FilterButtons: A component that displays buttons to change the current filter.

3. Theme Switching (ThemeContext)

    - State: The current theme. Possible values: ‘light’, ‘dark’.
    - Actions (exposed via context):
        - toggleTheme(): Switches between ‘light’ and ‘dark’ themes.
    - Functionality:
        - The application should visually change based on the selected theme (e.g., background colors, text colors). Apply theme changes to the main app container and ideally a few key components.
        - ThemeToggleButton: A button to toggle the theme.

4. Persistence Layer

    - Functionality:
        - The state of the todos (from TodoContext) and the current theme (from ThemeContext) should be persisted to localStorage.
        - When the application loads, it should attempt to rehydrate these states from localStorage.
        - Updates to todos or theme should automatically update localStorage.

## Tools

- HTML
- CSS
- JavaScript
- React
- Vite

## Reflection

After getting help setting up the file structure, I found that this exercise was simple.  I took some extra time to determine how to set up the toggle using CSS instead of in-line styles like the class activities.  I liked using useContext and find it easier than prop drilling.