import React from 'react';
import { createContext } from 'react';
 
// Create a context with a default value (e.g., 'light' theme)
export const TodoContext = createContext(null);


// ( () => {
//     let retrievedArray = [];
//     const retrievedString = localStorage.getItem("taskArray");
//     if (retrievedString) { retrievedArray = JSON.parse(retrievedString) };
//     return retrievedArray;
// })
 