// Write your helper functions here!
require('isomorphic-fetch');

//GA5 should contain four fields:  pilot's name, copilot's name, fuel levels, mass of cargo
//1.  use preventDefault() to prevent a request from being sent out and page reloading
//2.  Validate
//  a.  The user entered something in every field
//  b.  Test for names, numbers for fuel and cargomass
//3.  With validation, update a list of what is and is not ready
//4.  Indicate what is good or bad about the shuttle and if it is ready to launch using the DOM to update the CSS
//5.  Fetch some planetary JSON to update the mission destination with vital facts and figures about where the shuttle is headed
//The only files to edit are script.js and scritpHelper.js (DO NOT modify syles.css or index.html)


//validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.
//In scriptHelper.js, you will use validateInput() to complete the formSubmission() function. 
function validateInput(testInput) {   
        if (testInput === "") {
            return "Empty";
        } else if (isNaN(testInput)) {
            return "Not a Number";
        } else if (!isNaN(testInput)) {
            return "Is a Number";
        }; 
};

//formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass.
//Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements as described below(see assignment)
//Make sure to call your formSubmission() function at the appropriate time in your script.js file!

//The list of shuttle requirements, the div with the id faultyItems, should be updated if something is not ready for launch.
//1.  Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.
//2.  If user submits a fuel level that is too low (less than 10000 liters)
//  a. change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey
//  b. The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch"
//  c. the color should change to red
//3.  If the user submits a cargo mass that is too large (more than 10,000 kilograms)
//  a. change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off
//  b. The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch"
//  c. the color should change to red
//4.  If the shuttle is ready to launch
//  a.  change the text of launchStatus to green
//  b.  display "Shuttle is ready for launch"
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
  
    pilot = launchForm.querySelector("input[name=pilotName]").value;
    copilot = launchForm.querySelector("input[name=copilotName]").value;
    fuelLevel = launchForm.querySelector("input[name=fuelLevel]").value;
    cargoMass = launchForm.querySelector("input[name=cargoMass]").value;

	let ready = true;

    if (validateInput(pilot) === "Not a Number") {
        faultyItems.style.visibility = 'visible';
        pilotStatus.style.color = 'black';
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;  
    } else {      
        ready = false;
        alert(`Pilot name must be a string! ${pilot}`);
        faultyItems.style.visibility = 'visible';
        pilotStatus.style.color = 'red';
        pilotStatus.innerHTML = `Pilot is not ready for launch`;
    };
    
    if (validateInput(copilot) === "Not a Number") {
        faultyItems.style.visibility = 'visible';
        copilotStatus.style.color = 'black';
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    } else {      
        ready = false;
        alert(`Co-pilot name must be a string! ${copilot}`);
        faultyItems.style.visibility = 'visible';
        copilotStatus.style.color = 'red';
        copilotStatus.innerHTML = `Co-pilot is not ready for launch`;
    }; 
       
    if ((validateInput(fuelLevel) === "Is a Number") && (fuelLevel >= 10000)) {
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
        fuelStatus.style.color = "black";       
    } else if (validateInput(fuelLevel) === "Is a Number") {
        ready = false;
        fuelStatus.innerHTML = "Fuel level too low for launch";
        fuelStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else {
        ready = false;
        alert(`Fuel Level (L) must be a number! ${fuelLevel}`);
        faultyItems.style.visibility = 'visible';
        fuelStatus.style.color = 'red';
        fuelStatus.innerHTML = `Fuel level information insufficient for launch`;
    }

    if ((validateInput(cargoMass) === "Is a Number") && (cargoMass <= 10000)) {
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        cargoStatus.style.color = "black";    
    } else if (validateInput(cargoMass) === "Is a Number") {
        ready = false;
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        cargoStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else {
        ready = false;
        alert(`Cargo Mass (kg) must be a number! ${cargoMass}`);
        faultyItems.style.visibility = 'visible';
        cargoStatus.style.color = 'red';
        cargoStatus.innerHTML = `Cargo mass information insufficient for launch`; 
    }
        
    if (ready) {
        faultyItems.style.visibility = 'visible';
        launchStatus.style.color = 'green';
		launchStatus.innerHTML = 'Shuttle is Ready for Launch';
    } else {
        faultyItems.style.visibility = 'visible'; 
        launchStatus.style.color = 'red';
		launchStatus.innerHTML = 'Shuttle Not Ready for Launch';  
    }
} 



//In scriptHelper.js, you have three functions for this task: myFetch(), pickPlanet(), and addDestinationInfo()
//First, review the comments in addDestinationInfo(). 
//This is the format of the innerHTML for the missionTarget div, which you can locate using the document parameter of addDestinationInfo()
//addDestinationInfo() does not need to return anything
//pickPlanet() takes in one argument: a list of planets.
//Using Math.random(), return one planet from the list with a randomly-selected index
//myFetch() has some of the code necessary for fetching planetary JSON, however, it is not complete.
//You need to add the URL and return response.json()
//First set listedPlanetsResponse equal to the value returned when calling myFetch()
//This value is going to be a promise.
//If we head to our browser and open up our developer tools, we can now see a list of the planets
//Then using pickPlanet() and addDestinationInfo(), select a planet at random from listedPlanets and pass that information to addDestinationInfo()
//Reload your page and check out your site to see the mission target information.
async function myFetch() {    

    const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    const planetsReturned = await response.json();
    return planetsReturned;
}

function pickPlanet(planets) {
    let number = 0;
    number = [Math.floor(Math.random() * planets.length)];
    let planetChosen = planets[number];
    return planetChosen;
}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {   
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
                    <img src="${imageUrl}" class = "avatar">
            </div>
            `;
            div.appendChild(elem);
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;