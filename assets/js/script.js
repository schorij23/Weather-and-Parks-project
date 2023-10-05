// Constants
const apiKey = "a5TRtoX59To11woolQUJEs2WY34dc0AZ6MppUzci";
const openWeatherMapApiKey = '876fe47417eaaeff0f787d1ddd261473';

// DOM Elements
const searchBtn = document.getElementById("search-button");
const parkDisplayContainer = document.getElementById("park-display-container");

// Event Listeners
searchBtn.addEventListener("click", fetchParkData);
window.addEventListener('load', displayStoredParkInfo);

function fetchParkData() {
    // ... (Your existing fetchParkData function)

    // Event listeners for modal close
    const closeModalBtn = document.getElementById("noMatchingParkModal");
    closeModalBtn.addEventListener("click", () => closeModal("noMatchingParkModal"));
    window.addEventListener("click", (event) => {
        if (event.target === closeModalBtn) closeModal("noMatchingParkModal");
    });
}

function fetchWeatherForecast(latitude, longitude) {
    // ... (Your existing fetchWeatherForecast function)
}

function displayParkInfo(park) {
    // ... (Your existing displayParkInfo function)
}

function displayStoredParkInfo() {
    // ... (Your existing displayStoredParkInfo function)
}

function displayWeatherForecast(weatherData) {
    // ... (Your existing displayWeatherForecast function)
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

function clearParkDisplay() {
    parkDisplayContainer.innerHTML = "";
}


