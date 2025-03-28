// We want the structure and data to be stored here instead of just updating the dom

const explorerData = [];
const parentContainer = document.querySelector(".parentContainer");
const parentFolder = document.getElementById("parentFolder");
const parentFile = document.getElementById("parentFile");

parentFolder.addEventListener("click", () => {
    const item = createItemInput(explorerData, parentContainer, null, true); 
    parentContainer.appendChild(item);
});

parentFile.addEventListener("click", () => {
    const item = createItemInput(explorerData, parentContainer, "file", true);
    parentContainer.appendChild(item);
})


function createItemInput(explorerData, parentContainer, type, isFirstLevel) {

    // Creating the name input

    const itemInput = document.createElement("input");
    itemInput.type = "text";
    itemInput.placeholder = type === "file" ? "File name" : "Folder name";

    // Creating the add button

    const addButton = document.createElement("button");
    addButton.textContent = type === "file" ? "Add file" : "Add folder";

    // Creating cancel button

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    // Creating a parent container to group all these elements and style them

    const createItemContainer = document.createElement("div");
    createItemContainer.className = "createItemContainer";

    createItemContainer.appendChild(itemInput);
    createItemContainer.appendChild(addButton);
    createItemContainer.appendChild(cancelButton);
    
    // Add some space to the left if we're at a lower level on the file explorer
    
    createItemContainer.style.marginLeft = !isFirstLevel && "20px";

    return createItemContainer;

}