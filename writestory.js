document.addEventListener("DOMContentLoaded", () => {
    const storyForm = document.querySelector(".story-form");
    const thankYouMessage = document.querySelector(".thank-you-message");

    // Handle form submission
    storyForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Show the thank-you message
        thankYouMessage.style.display = "block";

        // Clear the form fields after submission
        storyForm.reset();

        // Optional: Hide the thank-you message after 5 seconds
        setTimeout(() => {
            thankYouMessage.style.display = "none";
        }, 5000); // Adjust the time if needed (5000ms = 5 seconds)

        document.getElementById("send-btn").addEventListener("click", function() {
            // Show the thank-you message
            document.querySelector(".thank-you-message").style.display = "block";
            
            // Optionally, hide the message after 3 seconds (3000ms)
            setTimeout(function() {
                document.querySelector(".thank-you-message").style.display = "none";
            }, 3000); 
        });
        
    });
});
