// Write your JavaScript code here!


window.addEventListener("load", function() {

    

    let list = document.getElementById("faultyItems");
    let form = document.querySelector("form[data-testid=testForm]");
    form.addEventListener("submit", function(event) {
        //let list = document.getElementById("faultyItems").value;
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;

        event.preventDefault();
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    });

    let listedPlanets, planet;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
       
    });
    
 });