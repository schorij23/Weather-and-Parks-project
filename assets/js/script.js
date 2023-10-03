var searchInputVal = document.querySelector('#search').value;
var searchButton = document.querySelector('#search-button');

searchButton.addEventListener("click", parksInState);

function parksInState(searchInputVal) {
console.log(searchInputVal);
// curl -X GET "https://developer.nps.gov/api/v1/parks?stateCode=" + searchInputVal + "&limit=50&start=0&q=address" -H "accept: application/json";
}

