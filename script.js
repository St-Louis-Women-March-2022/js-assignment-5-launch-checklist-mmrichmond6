// window.addEventListener("load", function(){
//     // TODO: register the handler
//     let form = document.getElementById("testForm");
//     form.addEventListener("click", formSubmission);
// });

function validateInput(testInput) {
    if (testInput === Number) {
        console.log("Is a Number");
        return "Is a Number";
    } else if (isNaN(testInput) === true) {
        console.log("Not a Number");
        return "Not a Number";    
    } else if (testInput === "") {
        console.log("Empty");
        return "Empty";
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    document.getElementById("pilotStatus").value = pilot;
    document.getElementById("copilotStatus").value = copilot;
    if (fuelLevel < 10000) {
        document.getElementById("fuelStatus").value = "Not enough fuel for the journey!";
        document.getElementById("launchStatusCheck").style.color = "red";
        document.getElementById("launchStatusCheck").value = "Shuttle is not ready for launch";
    };
    document.getElementById("faultyItems").style.visibility = 'visible';
};


window.addEventListener("load", function() {
       

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

    if (!isNaN(pilotName) || pilot.value === "") {
        validateInput(pilotName);
        alert(`Pilot name must be a string! ${pilotName}`);
        event.preventDefault();
    } else if (!isNaN(copilotName) || copilot.value === "") {
        validateInput(copilotName);
        alert(`Co-pilot name must be a string! ${copilotName}`);
        event.preventDefault();
    } else if (isNaN(fuelLevelNum) || fuelLevel.value === "") {
        validateInput(fuelLevelNum);
        alert(`Fuel Level (L) must be a number! ${fuelLevelNum}`);
        event.preventDefault();
    } else if (isNaN(cargoMassNum) || cargoMass.value === "") {
        validateInput(cargoMassNum);
        alert(`Cargo Mass (kg) must be a number! ${cargoMassNum}`);
        event.preventDefault();
    } else if (isNaN(pilotName) || isNaN(copilotName) || !isNaN(fuelLevelNum) || !isNaN(cargoMassNum)) {
        pilot = pilotName;
        copilot = copilotName;
        fuelLevel = fuelLevelNum;
        cargoMass = cargoMassNum;
        
        formSubmission;
    }
    

    
    });
    
    
     

//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
});
