// Ensure smooth scrolling when clicking on anchor links
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll behavior to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent default link behavior

            const targetId = this.getAttribute('href').substring(1);  // Get the target element ID
            const targetElement = document.getElementById(targetId);  // Find the target element

            // Scroll to the target element with smooth behavior
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Optional: Add smooth scroll to sections when clicking on the navbar
    const navbarLinks = document.querySelectorAll('nav ul li a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
       
            
            const sectionId = this.getAttribute('href').substring(1); // Get the section id
            const sectionElement = document.getElementById(sectionId); // Find the section element

            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});


//Link and navbar function
window.onload = function() {
    // Get the current page URL path, remove any leading or trailing slashes
    const currentPage = window.location.pathname.split("/").pop().toLowerCase();

    // Get all the <a> tags in the navbar
    const navLinks = document.querySelectorAll('nav ul li a');

    // Loop through the links to match the current page with the href
    navLinks.forEach(link => {
        // Get the href attribute of the link
        const linkPage = link.getAttribute('href').toLowerCase();

        // Check if the current page name matches the link's href
        if (currentPage === linkPage) {
            link.classList.add('active');  // Add the 'active' class to the correct link
        } else {
            link.classList.remove('active');  // Remove the 'active' class from other links
        }
    });
};


//View all loop
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('view-all-btn').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior

        // Select all issue cards
        const issueCards = document.querySelectorAll('.issue-card');

        // Loop through each card and make them visible
        issueCards.forEach(function(card) {
            card.style.display = 'block'; // Show all cards
        });

        // No need to hide the "View All" button, so this line is removed
    });
});




// Stories of Hope 
document.addEventListener('DOMContentLoaded', function() {
    const storyHopeArrow = document.querySelector('.stories-of-hope .arrow');
    
    if (storyHopeArrow) {
        storyHopeArrow.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent any default behavior of the span

            // Get the list of story cards and the container
            const storyList = document.querySelector('.stories-of-hope .story-slider');
            const storyCards = document.querySelectorAll('.stories-of-hope .story-card');

            // Move the first card to the last position
            if (storyCards.length > 0) {
                storyList.appendChild(storyCards[0]); // Move the first card to the end
            }
        });
    }

    // Personal Stories
    const personalStoriesArrow = document.querySelector('.personal-stories .arrow');
    
    if (personalStoriesArrow) {
        personalStoriesArrow.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent any default behavior of the span

            // Get the list of story cards and the container
            const personalStoryList = document.querySelector('.personal-stories .stories-list');
            const personalStoryCards = document.querySelectorAll('.personal-stories .story-card');

            // Move the first card to the last position
            if (personalStoryCards.length > 0) {
                personalStoryList.appendChild(personalStoryCards[0]); // Move the first card to the end
            }
        });
    }
});

