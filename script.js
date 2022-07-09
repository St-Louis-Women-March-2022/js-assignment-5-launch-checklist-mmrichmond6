//GA5 should contain four fields:  pilot's name, copilot's name, fuel levels, mass of cargo
//1.  use preventDefault() to prevent a request from being sent out and page reloading
//2.  Validate
//  a.  The user entered something in every field
//  b.  Test for names, numbers for fuel and cargomass
//3.  With validation, update a list of what is and is not ready
//4.  Indicate what is good or bad about the shuttle and if it is ready to launch using the DOM to update the CSS
//5.  Fetch some planetary JSON to update the mission destination with vital facts and figures about where the shuttle is headed
//The only files to edit are script.js and scritpHelper.js (DO NOT modify syles.css or index.html)



// window.addEventListener("load", function(){
//     // TODO: register the handler
//     let form = document.getElementById("testForm");
//     form.addEventListener("click", formSubmission);
// });


//validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.
//In scriptHelper.js, you will use validateInput() to complete the formSubmission() function. 
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
    
};


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
    
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then((json) => {
            console.log(json);
            let result = json;
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
            return response.json;
        });
        return planetsReturned;    
};

function pickPlanet(planets) {
    
}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

        
};
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
 




window.addEventListener("load", function() {
       

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {    
    
    event.preventDefault();
	event.stopPropagation();

    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    let pilotName = pilot.value;
    let copilotName = copilot.value;
    let fuelLevelNum = fuelLevel.value;
    let cargoMassNum = cargoMass.value;

    let items = document.getElementById("faultyItems");
	let launchStatus = document.getElementById('launchStatus');
	let fuelStatus = document.getElementById('fuelStatus');
	let cargoStatus = document.getElementById('cargoStatus')
	let ready = true;

    if (!isNaN(pilotName) || pilot.value === "") {
        validateInput(pilot.value);
        alert(`Pilot name must be a string! ${pilotName}`);
    } else if (!isNaN(copilotName) || copilot.value === "") {
        validateInput(copilotName);
        alert(`Co-pilot name must be a string! ${copilotName}`);
    } else if (isNaN(fuelLevelNum) || fuelLevel.value === "") {
        validateInput(fuelLevelNum);
        alert(`Fuel Level (L) must be a number! ${fuelLevelNum}`);
    } else if (isNaN(cargoMassNum) || cargoMass.value === "") {
        validateInput(cargoMassNum);
        alert(`Cargo Mass (kg) must be a number! ${cargoMassNum}`);
    } else {      
        items.style.visibility = 'visible';
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} Ready!`;
        document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotName} Ready!`;
        myFetch();
        if (fuelLevelNum < 10000) {
            ready = false;
            fuelStatus.innerHTML = "Not enough fuel for the journey!";
            fuelStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle is not ready for launch";
            launchStatus.style.color = "red";
        } else {
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
            fuelStatus.style.color = "black";
        }
        if (cargoMassNum > 10000) {
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
        } else {
            items.style.visibility = 'visible'; 
            launchStatus.style.color = 'red';
			launchStatus.innerHTML = 'Shuttle not ready for launch';
        }

    }
    
});

});
    
    
     

let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse;
listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
}).then(function () {
    console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
})