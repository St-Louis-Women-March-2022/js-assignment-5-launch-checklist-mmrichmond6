// Write your helper functions here!
require('isomorphic-fetch');

window.addEventListener("load", function() {
    


    function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
        document = this.document.querySelector("form");
        planetPicked = json[pickPlanet()];
                console.log(planetPicked);
                    let div = document.getElementById("missionTarget");
                    let elem = document.createElement("div");
                    elem.innerHTML = `
                    <div class = "planets">
                        <h2>Mission Destination</h2>
                            <ol>
                                <li>Name: ${planetPicked.name}</li>
                                <li>Diameter: ${planetPicked.diameter}</li>
                                <li>Star: ${planetPicked.star}</li>
                                <li>Distance from Earth: ${planetPicked.distance}</li>
                                <li>Number of Moons: ${planetPicked.moons}</li>
                            </ol>
                            <img src="${planetPicked.image}" class = "avatar">
                    </div>
                    `;
                    div.appendChild(elem);     
    };

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
        console.log(json);
        let number = 0;
        number = [Math.floor(Math.random() * json.length)];
        let planetPicked = json[number];
        console.log(planetPicked);
        // for(let i=0; i < json.length; i++) {
            let div = document.getElementById("missionTarget");
            let elem = document.createElement("div");
            elem.innerHTML = `
            <div class = "planets">
                <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${planetPicked.name}</li>
                        <li>Diameter: ${planetPicked.diameter}</li>
                        <li>Star: ${planetPicked.star}</li>
                        <li>Distance from Earth: ${planetPicked.distance}</li>
                        <li>Number of Moons: ${planetPicked.moons}</li>
                    </ol>
                    <img src="${planetPicked.image}" class = "avatar">
            </div>
            `;
            div.appendChild(elem); 
        });
        return planetsReturned; 
    });
}

function pickPlanet(planets) {
    let number = 0;
    number = [Math.floor(Math.random() * 6)];
    return number;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

});

