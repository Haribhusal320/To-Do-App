const inputbox = document.querySelector('#input_box');
const itemlist = document.querySelector('#list');

// Add a click event listener for deleting items
itemlist.addEventListener('click', removeitem);

// Add a click event listener for toggling the crossed-out style
itemlist.addEventListener('click', toggleCrossedOut);

// Define the addtask() function to add new tasks
function addtask() {
    if (inputbox.value === '') {
        alert('You have to write something;');
    } else {
        let li = document.createElement("li"); // Create an HTML li element
        li.innerHTML = inputbox.value; // Set the text content to the input value
        itemlist.appendChild(li); // Add the li element to the list
        let span = document.createElement('span');
        span.innerHTML = '&#215;'; // '&#215;' is the HTML entity for '×'
        li.appendChild(span);
    }
    inputbox.value = ''; // Clear the input box after adding the task
    saveData(); // Save the data to local storage when adding a new task
}

// Toggle the crossed-out style when clicking on a task
function toggleCrossedOut(e) {
    if (e.target.tagName === 'LI') { // Check if the clicked element is an LI (list item)
        e.target.classList.toggle('checked'); // Toggle the 'checked' class for styling
        saveData(); // Save the data to local storage after toggling
    }
}

// Remove notes when the '×' is clicked
function removeitem(e) {
    if (e.target.tagName === 'SPAN') { // Check if the clicked element is a SPAN
        if (confirm('Are you sure you want to delete notes?')) {
            const li = e.target.parentElement;
            itemlist.removeChild(li);
            saveData(); // Save the data to local storage after deleting
        }
    }
}

// Store data in local storage
function saveData() {
    localStorage.setItem('data', list.innerHTML); // Save the list's inner HTML to 'data'
}

// Display data when the page is refreshed or reopened
function showNotes() {
    list.innerHTML = localStorage.getItem('data'); // Set the list's inner HTML from 'data' in local storage
}

showNotes();
