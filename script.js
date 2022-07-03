// import { validateInput } from './scriptHelper';

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

                
        if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        alert("All fields are required!");
        event.preventDefault();
        } else if (!isNaN(pilotName)) {
            alert(`Pilot name must be a string! ${pilotName}`);
            event.preventDefault();
        } else if (!isNaN(copilotName)) {
            alert(`Co-pilot name must be a string! ${copilotName}`);
            event.preventDefault();
        } else if (isNaN(fuelLevelNum)) {
            alert(`Fuel Level (L) must be a number! ${fuelLevelNum}`);
            event.preventDefault();
        } else if (isNaN(cargoMassNum)) {
            alert(`Cargo Mass (kg) must be a number! ${cargoMassNum}`);
            event.preventDefault();
        } else {
            alert(`You are submitting the following information:  Pilot Name: ${pilotName}; Co-pilot Name: ${copilotName}; Fuel Level (L): ${fuelLevelNum}; Cargo Mass (kg): ${cargoMassNum}`)
        }

    });
       
        
        // if (Number.isNaN(pilot.value)) {
        //     alert(pilot.value + " must be a string!");
        //     event.preventDefault();
        // }

        // if (Number.isNaN(copilot.value)) {
        //     alert(pilot.value + " must be a string!");
        //     event.preventDefault();
        // }

        // if (Number.isNaN(fuelLevel.value)) {
        //     alert(pilot.value + " must be a string!");
        //     event.preventDefault();
        // }

        // if (Number.isNaN(cargoLevel.value)) {
        //     alert(pilot.value + " must be a string!");
        //     event.preventDefault();
    //     }
    // })


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
   
});
