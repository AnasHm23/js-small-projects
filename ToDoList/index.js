const h2El = document.getElementById("h2-el");
const h5El = document.getElementById("h5-el");
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
let items = [];

// Load items from localStorage
const itemsLocalStorage = localStorage.getItem("items");
if (itemsLocalStorage) {
    items = JSON.parse(itemsLocalStorage);
    renderList();
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    items = [];
    renderList();
});

h2El.textContent = "Dynamic To-Do List";
h5El.textContent += " ✅";

inputBtn.addEventListener("click", function() {
    if (inputEl.value.trim() !== "") { // Check for non-empty input
        items.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("items", JSON.stringify(items));
        renderList();
    }
});

function renderList() {
    ulEl.innerHTML = ""; // Clear the current list
    for (let i = 0; i < items.length; i++) {
        const li = document.createElement("li");
        li.textContent = items[i];
        
        // Mark as complete feature
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
            saveItems();
        });
        
        // Delete individual item feature
        li.addEventListener("contextmenu", function(event) {
            event.preventDefault(); // Prevent default context menu
            items.splice(i, 1); // Remove the item from the array
            saveItems();
            renderList(); // Re-render the list
        });
        
        ulEl.appendChild(li);
    }
}

function saveItems() {
    localStorage.setItem("items", JSON.stringify(items)); // Save items to localStorage
}
