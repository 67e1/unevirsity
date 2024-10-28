const searchInput = document.getElementById('searchInput');
const imageContainer = document.getElementById('imageContainer');

// Function to search for images
function searchImages() {
    const searchTerm = searchInput.value.toLowerCase();
    const images = imageContainer.querySelectorAll('img');

    images.forEach(image => {
        const imageName = image.alt.toLowerCase();
        if (imageName.includes(searchTerm)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Add event listener to the search input
searchInput.addEventListener('input', searchImages);