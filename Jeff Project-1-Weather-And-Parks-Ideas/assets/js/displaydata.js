//Sets up the National Park Service API key
var apiKey = "a5TRtoX59To11woolQUJEs2WY34dc0AZ6MppUzci";
// Get a reference to the "Search" button.
var searchBtn = document.getElementById("search-button");
// Add click event listener to the Search button
searchBtn.addEventListener("click", fetchParkData);

// Function to fetch park data
function fetchParkData() {
// Get the input in lowercase (most people type lowercase)
    var parkName = document.getElementById("search").value.toLowerCase();
// Log the park name to the console (debugging)
    console.log(parkName);
// Variable to fetch a list of all parks
    var allParksAPI = "https://developer.nps.gov/api/v1/parks?limit=500&api_key=" + apiKey;
// Fetch a list of all parks at return response as json
    fetch(allParksAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
// Filter parks to include only the searched park    
        var matchingParks = data.data.filter(function (park) {
// Check if the park's name matches
            return park.fullName.toLowerCase().includes(parkName);
        });
// If there is a matching park
            if (matchingParks.length > 0) {
// Display the first matching park's information
                displayParkInfo(matchingParks[0]);
            } else {
// Log if there are no matching parks
            console.log("No matching parks found");
// Clear the park-display section
                clearParkDisplay();
            }
        })
        // .catch(function (error) {
        //     console.error("Error fetching park data: ", error);
        // });
}
// Function that displays park info on the screen
function displayParkInfo(park) {
    var parkDisplayContainer = document.getElementById("park-display-container");

// Clear any previous content
    parkDisplayContainer.innerHTML = "";

// Create a h3 element and add park name content
    var parkName = document.createElement("h3");
    parkName.textContent = park.fullName;
// Create a p element and add description content
    var parkDescription = document.createElement("p");
    parkDescription.textContent = park.description;
// Create anchor element for the park url
    var parkURL = document.createElement("a");
    parkURL.href = park.url;
    parkURL.textContent = "Visit Park Website @ National Park Service";
// Create a image element for image associated with park website
    var parkImage = document.createElement("img");
    parkImage.src = park.images[0].url;
    parkImage.alt = park.fullName;
    
// Scale image set to auto for aspect ratio
    parkImage.style.width = "500px";
    parkImage.style.height = "auto";

// Append the elements from top to bottom        
    parkDisplayContainer.appendChild(parkName);
    parkDisplayContainer.appendChild(parkURL);
    parkDisplayContainer.appendChild(parkDescription);
    parkDisplayContainer.appendChild(parkImage);
    
}
// Function that Clears content from the park-display
function clearParkDisplay() {
    var parkDisplayContainer = document.getElementById("park-display-container");
// Clears any content from the park-display
    parkDisplayContainer.innerHTML = "";
}
