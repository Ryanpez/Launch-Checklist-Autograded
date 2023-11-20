// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`;
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    console.log(validateInput(pilot));
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
    } 
    else {
        if (validateInput(fuelLevel) === "Not a Number") {
            alert("Fuel Level is not a number");
        }
        if (validateInput(cargoLevel) === "Not a Number") {
            alert("Cargo Mass is not a number");
        }
        
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`; 
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        }
        if (fuelLevel < 10000) {
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML ="Fuel level too low for launch";
        } 
        else if (validateInput(fuelLevel) === "Is a Number") {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        }

        if (cargoLevel > 10000) {
            list.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            
            
        } 
        else if (validateInput(cargoLevel) === "Is a Number") {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        if (fuelLevel >= 10000 && cargoLevel <= 10000 && validateInput(cargoLevel) == "Is a Number" && validateInput(fuelLevel) === "Is a Number") {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
        }
        return;
    }
 
 async function myFetch() {
     let planetsReturned;
 
     let item = await fetch("https://handlers.education.launchcode.org/static/planets.json");
     planetsReturned = item.json(); 
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;