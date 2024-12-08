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
