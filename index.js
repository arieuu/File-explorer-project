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


function createFolderOrFileElement(item, type = null, isFirstLevel) {
    // function to create and append the element to its parent

    const elementParentDiv = document.createElement("div");
    elementParentDiv.className = "itemParentDiv";

    if(type === "file") {
        elementParentDiv.innerHTML = `
            <div class="container">
                <div class="file-info">
                    <img src="./file.svg" class="file">
                    <p> ${item.name} </p>
                </div> 

                <div class="actions">
                    <img src="./edit.svg" class="edit-btn"/>
                    <img src="./delete.svg" class="delete-btn"/>
                </div>
            </div> 
        `;

    } else {

    }

    return elementParentDiv; // Returning the created element and its info

}


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

    // Logic for buttons

    addButton.addEventListener("click", () => {
        const itemName = itemInput.value.trim();

        // Don't do anything unless the user enters a name for the item

        if(itemName) {
            const newItem = type === "file" ? { id: Date.now(), name: itemName} 
                                            : {id: Date.now(), name: itemName, items: []};

            // Now lets register it in the array

            isFirstLevel ? explorerData.push(newItem) : explorerData.items.push(newItem);

            // Actually manipulating the DOM

            if(isFirstLevel) {
                parentContainer.appendChild(createFolderOrFileElement(newItem, type === "file" && "file", isFirstLevel));

            } else {

            }
        }
    })

    cancelButton.addEventListener("click", () => {
        createItemContainer.remove();
    })

    return createItemContainer;

}