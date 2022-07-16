


window.addEventListener("load", function() {  

    let form = this.document.querySelector("form");
    form.addEventListener("submit", function(event) {    
    

    formSubmission();

    event.preventDefault();
});

    let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {   
    listedPlanets = result;

}).then(function () {
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let planetPicked = pickPlanet(listedPlanets);
    addDestinationInfo(document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);
});


});