export function RetrieveSavedTasks() {
    let retrievedArray = [];
    const retrievedString = localStorage.getItem("taskArray");
    if (retrievedString) { retrievedArray = JSON.parse(retrievedString) };
    return retrievedArray;
}

export function RetrieveId() {
    let retrievedId = "";
    let retrievedIdArray = localStorage.getItem("savedId");
    if (retrievedIdArray) { retrievedId = JSON.parse(retrievedIdArray) };
    let nextId= 0;
    if (retrievedId) {
        nextId = parseInt(retrievedId[0]) + 1;
    } else nextId = 1;
    return nextId;
}