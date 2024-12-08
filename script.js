// FOR PRODUCT IMAGES 

// Get all image links
const imageLinks = document.querySelectorAll('.image-link');

// Listen for clicks on each image link
imageLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const imgSrc = this.getAttribute('data-img-src');
        document.getElementById('modalImage').src = imgSrc;
    });
});





// FOR EMAIL VALIDATION

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate the form
    if (!event.target.checkValidity()) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Simulate form submission
    alert("Thank you for reaching out. We will get back to you soon!");

    // Reset the form after submission
    event.target.reset();
});
