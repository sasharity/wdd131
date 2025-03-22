const today = new Date();


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);


document.getElementById("currentyear").textContent = new Date().getFullYear();

// Populate the last modified date
document.getElementById("lastModified").textContent = 
    "Last Modified: " + document.lastModified;