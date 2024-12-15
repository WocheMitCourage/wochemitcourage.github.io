// Sample data (replace with actual data from your backend)
const articles = [
    { title: "Blah Blah 1", readingTime: "5 min" },
    { title: "Blah Blah 2", readingTime: "7 min" },
    { title: "BlahBlah3", readingTime: "6 min" }
];

const media = [
    { title: "Blah Blah video 1", type: "Video", duration: "15 min" },
    { title: "Blah Blah podcast", type: "Podcast", duration: "30 min" },
    { title: "Blah Blah video 2", type: "Video", duration: "45 min" }
];

// Function to populate latest articles
function populateLatestArticles() {
    const articleGrid = document.querySelector('.articleGrid');
    articles.forEach((article, index) => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>Lesezeit: ${article.readingTime}</p>
        `;
        articleElement.style.opacity = '0';
        articleElement.style.transform = 'translateY(20px)';
        articleGrid.appendChild(articleElement);
        
        setTimeout(() => {
            articleElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            articleElement.style.opacity = '1';
            articleElement.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Function to populate latest media
function populateLatestMedia() {
    const mediaGrid = document.querySelector('.mediaGrid');
    media.forEach((item, index) => {
        const mediaElement = document.createElement('div');
        mediaElement.classList.add('media');
        mediaElement.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.type} - ${item.duration}</p>
        `;
        mediaElement.style.opacity = '0';
        mediaElement.style.transform = 'translateY(20px)';
        mediaGrid.appendChild(mediaElement);
        
        setTimeout(() => {
            mediaElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            mediaElement.style.opacity = '1';
            mediaElement.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        // Implement search logic here
        console.log(`Searching for: ${searchTerm}`);
        // You would typically send this to a backend API and update the page with results
    });
}

// Initialize the page
function init() {
    populateLatestArticles();
    populateLatestMedia();
    setupSearch();
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

