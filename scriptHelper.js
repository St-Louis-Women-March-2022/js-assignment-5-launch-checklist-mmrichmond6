// Write your helper functions here!
require('isomorphic-fetch');

window.addEventListener("load", function() {

function validateInput(testInput) {    
    if (testInput === "") {
        console.log("Empty");
        return "Empty";
    } else if (isNaN(testInput) === false) {
        console.log("Is a Number");
        return "Is a Number";
    } else if (isNaN(testInput) === true) {
        console.log("Not a Number");
        return "Not a Number";    
    }
};
    

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    document = this.document.querySelector("form");    
    
    let pilotInput = document.querySelector("input[name=pilotName]");
    let copilotInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");

    pilot = pilotInput.value;
    copilot = copilotInput.value;
    fuelLevel = fuelLevelInput.value;
    cargoMass = cargoMassInput.value;

	let ready = true;

    if (!isNaN(pilot) || pilot === "") {
        validateInput(pilotInput.value);
        alert(`Pilot name must be a string! ${pilot}`);
    } else if (!isNaN(copilot) || copilot === "") {
        validateInput(copilotInput.value);
        alert(`Co-pilot name must be a string! ${copilot}`);
    } else if (isNaN(fuelLevel) || fuelLevel === "") {
        validateInput(fuelLevelInput.value);
        alert(`Fuel Level (L) must be a number! ${fuelLevel}`);
    } else if (isNaN(cargoMass) || cargoMass === "") {
        validateInput(cargoMassInput.value);
        alert(`Cargo Mass (kg) must be a number! ${cargoMass}`);
    } else {      
        faultyItems.style.visibility = 'visible';
        pilotStatus.innerHTML = `Pilot ${pilot} Ready!`;
        copilotStatus.innerHTML = `Copilot ${copilot} Ready!`;
        
        if (fuelLevel < 10000) {
            ready = false;
            fuelStatus.innerHTML = "Not enough fuel for the journey!";
            fuelStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle is not ready for launch";
            launchStatus.style.color = "red";
        } else {
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
            fuelStatus.style.color = "black";
        }
        if (cargoMass > 10000) {
            ready = false;
            cargoStatus.innerHTML = "Cargo mass too much for the shuttle to take off!";
            cargoStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle is not ready for launch";
            launchStatus.style.color = "red";
        } else {
            cargoStatus.innerHTML = 'Cargo mass low enough to take off!';
            cargoStatus.style.color = "black";
        }
        if (ready) {
            launchStatus.style.color = 'green';
			launchStatus.innerHTML = 'Shuttle is ready for launch';
            return;
        } else {
            faultyItems.style.visibility = 'visible'; 
            launchStatus.style.color = 'red';
			launchStatus.innerHTML = 'Shuttle not ready for launch';   
        }
    }    
};

async function myFetch() {    
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    response.json().then((json) => {
        let length = json.length;
        let index = pickPlanet(length);
        let planetPicked = json[index];
        console.log(planetPicked);
        addDestinationInfo(document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);
        });
        return planetsReturned; 
    });
}

function pickPlanet(planets) {
    let number = 0;
    number = [Math.floor(Math.random() * planets)];
    return number;
}

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    document = this.document.querySelector("form");
    
    let div = this.document.getElementById("missionTarget");
    let elem = this.document.createElement("div");
            elem.innerHTML = `
            <div class = "planets">
                <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${name}</li>
                        <li>Diameter: ${diameter}</li>
                        <li>Star: ${star}</li>
                        <li>Distance from Earth: ${distance}</li>
                        <li>Number of Moons: ${moons}</li>
                    </ol>
                    <img src="${image}" class = "avatar">
            </div>
            `;
            div.appendChild(elem);
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

});

