export function RetrieveSavedTodos() {
    let retrievedArray = [];
    const retrievedString = localStorage.getItem("todoArray");
    if (retrievedString) { retrievedArray = JSON.parse(retrievedString) };
    return retrievedArray;
}

export function RetrieveId() {
    let retrievedId = "";
    let retrievedIdArray = localStorage.getItem("savedId");
    if (retrievedIdArray) { retrievedId = JSON.parse(retrievedIdArray) };
    let nextId = 0;
    if (retrievedId) {
        console.log(retrievedId);
        nextId = retrievedId + 1;
    } else nextId = 1;
    return nextId;
}