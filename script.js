const currentPage = window.location.pathname;

// Get the nav links
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");

// Function to set the active class
function setActiveLink(link) {
    homeLink.classList.remove("active");
    aboutLink.classList.remove("active");
    contactLink.classList.remove("active");
    link.classList.add("active");
}

// Check the current page and set the active link
if (currentPage.includes("home.html") || currentPage === "/" || currentPage.endsWith("index.html")) { //Handles root path and index.html
    setActiveLink(homeLink);
} else if (currentPage.includes("about.html")) {
    setActiveLink(aboutLink);
} else if (currentPage.includes("contact.html")) {
    setActiveLink(contactLink);
}

 // Show the correct section based on the current page
const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");

function showSection(section) {
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    contactSection.style.display = "none";
    section.style.display = "block";
}

if (currentPage.includes("home.html") || currentPage === "/" || currentPage.endsWith("index.html")) {
    showSection(homeSection);
} else if (currentPage.includes("about.html")) {
    showSection(aboutSection);
} else if (currentPage.includes("contact.html")) {
    showSection(contactSection);
}