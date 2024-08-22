document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its ID
    var button = document.getElementById("redirectButton");

    // Override link (if needed, set the URL here)
    var overrideLink = "https://snapinsta.app/"; // Example: "https://another-link.com"

    // If an override link is provided, update the button's href
    if (overrideLink) {
        button.setAttribute("href", overrideLink);
    }
});
