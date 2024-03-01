const addListButton = document.getElementById("addListButton");
const listsContainer = document.querySelector(".field");
addListButton.addEventListener("click", function() {
    const newList = document.createElement("ul");
    const defaultListItem = createListItem("Элемент списка");
    newList.appendChild(defaultListItem);
    listsContainer.appendChild(newList);
    defaultListItem.addEventListener("click", handleListItemClick);
});
function handleListItemClick(event) {
    const selectedRadio = document.querySelector('input[name="rad"]:checked');
    if (selectedRadio) {
        const actionType = selectedRadio.id;
        const inputText = document.getElementById("add").value;
        switch (actionType) {
            case "add":
                const newList = document.createElement("ul");
                const listItem = createListItem(inputText);
                newList.appendChild(listItem);
                event.currentTarget.appendChild(newList);
                break;
            case "insert":
                event.stopPropagation();
                const listItemToInsert = createListItem(inputText);
                const parent = event.target.parentNode;
                const index = Array.from(parent.children).indexOf(event.target);
                parent.insertBefore(listItemToInsert, parent.children[index]);
                break;
            case "change":
                event.stopPropagation();
                event.target.innerText = inputText;
                break;
            case "nest":
                event.stopPropagation();
                const newNestedList = document.createElement("ul");
                const nestedListItem = createListItem(inputText);
                newNestedList.appendChild(nestedListItem);
                event.target.appendChild(newNestedList);
                break;
            case "del":
                event.stopPropagation();
                event.target.remove();
                break;
        }
    }
}

function createListItem(text) {
    const listItem = document.createElement("li");
    listItem.innerText = text;
    return listItem;
}
