// main.js

// Update footer with current year and last modified date
const yearSpan = document.getElementById("year");
const modifiedSpan = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

// Local storage example: count site visits
let visitCount = Number(localStorage.getItem("visitCount")) || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);

console.log(`Welcome back! You've visited this site ${visitCount} times.`);

// Dynamic greeting on load
function greetUser() {
  const hour = new Date().getHours();
  const greeting = document.createElement("p");
  greeting.style.color = "#000000"; // black
  greeting.style.fontWeight = "bold";

  if (hour < 12) {
    greeting.textContent = "Good morning, cake lover!";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon, cake lover!";
  } else {
    greeting.textContent = "Good evening, cake lover!";
  }
  document.querySelector(".hero").appendChild(greeting);
}

window.addEventListener("DOMContentLoaded", greetUser);

// Update footer year and last modified
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Greeting message (dynamic time-based)
const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();
  let message = "Welcome!";
  if (hour < 12) message = "Good morning!";
  else if (hour < 18) message = "Good afternoon!";
  else message = "Good evening!";
  greeting.textContent = message;
}

// Contact Form Handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Save to localStorage (optional)
    localStorage.setItem("contact_name", name);
    localStorage.setItem("contact_email", email);
    localStorage.setItem("contact_subject", subject);
    localStorage.setItem("contact_message", message);

    // Show confirmation message
    const confirmation = document.getElementById("confirmation");
    confirmation.style.display = "block";

    // Reset form fields
    contactForm.reset();
  });
}
