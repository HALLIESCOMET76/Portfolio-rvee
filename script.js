// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Select the form element
    const form = document.querySelector('form');
    
    // Attach the saveFormData function to the form's submit event
    form.addEventListener('submit', saveFormData);

    // Load any saved form data when the page loads
    loadFormData();
});

// Save form data to local storage as JSON
function saveFormData(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get values from the form fields
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Check if all fields are filled
    if (name && email && message) {
        // Create an object to hold the form data
        const formData = {
            name: name,
            email: email,
            message: message
        };
        
        // Convert the formData object to a JSON string and save it in local storage
        localStorage.setItem('contactFormData', JSON.stringify(formData));
        alert("Form data saved successfully!");

        // Optionally, clear the form after saving
        document.querySelector('form').reset();
    } else {
        alert("Please fill in all fields before submitting.");
    }
}

// Load saved form data from local storage
function loadFormData() {
    // Retrieve the JSON string from local storage
    const savedData = localStorage.getItem('contactFormData');
    
    // If saved data exists, parse it and populate the form fields
    if (savedData) {
        const formData = JSON.parse(savedData);

        document.querySelector('input[name="name"]').value = formData.name || '';
        document.querySelector('input[name="email"]').value = formData.email || '';
        document.querySelector('textarea[name="message"]').value = formData.message || '';
    }
}

// Optionally, clear the saved form data from local storage
function clearFormData() {
    localStorage.removeItem('contactFormData');
    alert("Form data cleared!");
    document.querySelector('form').reset();
}
