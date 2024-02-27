// BOM property/method 1: Window location
console.log(window.location.href);

// BOM property/method 2: Window alert
window.alert("Welcome to our event website!");

// Cache elements
const eventDescription = document.getElementById('event-description');
const registerButton = document.getElementById('register-button');
const registrationForm = document.getElementById('registration-form');
const registrationSuccess = document.getElementById('registration-success');

//  Cache element using querySelector
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');

// Register event listeners and handler functions
registerButton.addEventListener('click', showRegistrationForm);
registrationForm.addEventListener('submit', handleRegistration);

function showRegistrationForm() {
    // Navigate parent-child relationship
    const formParent = nameInput.parentNode; // Getting the parent node of the name input
    const formChildren = formParent.childNodes; // Getting all child nodes of the parent node
    
    //  Modify HTML content in response to user interaction
    eventDescription.innerHTML = "Please fill out the registration form below:";
    // Modify CSS classes in response to user interaction
    eventDescription.classList.add('highlight');
    registrationForm.style.display = 'block';
}

function handleRegistration(event) {
    event.preventDefault();
    
    //  HTML attribute validation
    if (nameInput.validity.valid && emailInput.validity.valid) {
        // Simulating registration process
        setTimeout(() => {
            // Use DocumentFragment or HTML templating with cloneNode
            const fragment = document.createDocumentFragment();
            const successMessage = document.createElement('div');
            successMessage.textContent = "Registration successful!";
            fragment.appendChild(successMessage);
            registrationSuccess.appendChild(fragment);
            registrationSuccess.style.display = 'block';
        }, 1000);
    }
}

// DOM event-based validation for name input
nameInput.addEventListener('input', function() {
    if (!nameInput.validity.valid) {
        nameInput.setCustomValidity('Please enter your name.');
    } else {
        nameInput.setCustomValidity('');
    }
});

// DOM event-based validation for email input
emailInput.addEventListener('input', function() {
    if (!emailInput.validity.valid) {
        emailInput.setCustomValidity('Please enter a valid email address.');
    } else {
        emailInput.setCustomValidity('');
    }
});
