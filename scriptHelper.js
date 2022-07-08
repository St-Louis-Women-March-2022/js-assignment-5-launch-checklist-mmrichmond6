// Write your helper functions here!
require('isomorphic-fetch');

window.addEventListener("load", function() {

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === Number) {
        return "Is a Number";
    } else if (isNaN(testInput) === true) {
        return "Not a Number";    
    } else if (testInput === "") {
        return "Empty";
    }
}
    

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    let pilotName = pilot.value;
    let copilotName = copilot.value;
    let fuelLevelNum = fuelLevel.value;
    let cargoMassNum = cargoMass.value;
                
    if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        alert("All fields are required!");
        event.preventDefault();
        return console.log("Empty");
    } else if (!isNaN(pilotName)) {
        alert(`Pilot name must be a string! ${pilotName}`);
        event.preventDefault();
        return validateInput(pilotName);
    } else if (!isNaN(copilotName)) {
        alert(`Co-pilot name must be a string! ${copilotName}`);
        event.preventDefault();
        return console.log("Is a number");
    } else if (isNaN(fuelLevelNum)) {
        alert(`Fuel Level (L) must be a number! ${fuelLevelNum}`);
        event.preventDefault();
        return console.log("Not a number");
    } else if (isNaN(cargoMassNum)) {
        alert(`Cargo Mass (kg) must be a number! ${cargoMassNum}`);
        event.preventDefault();
        return console.log("Not a number");
    } else {
        alert(`You are submitting the following information:  Pilot Name: ${pilotName}; Co-pilot Name: ${copilotName}; Fuel Level (L): ${fuelLevelNum}; Cargo Mass (kg): ${cargoMassNum}`);
        return validateInput;
    }

    });

};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

});

