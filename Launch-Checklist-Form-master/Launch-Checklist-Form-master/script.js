// Write your JavaScript code here!
window.addEventListener("load", function() {

    document.addEventListener("submit", function(event) {

        event.preventDefault();
        const launchStatus = document.getElementById("launchStatus");
        const pilot = document.querySelector("input[name=pilotName]");
        const coPilot = document.querySelector("input[name=coPilotName]")
        const fuel = document.querySelector("input[name=fuelLevel]")
        const mass = document.querySelector("input[name=cargoMass]")
        let inputCorr = !false;
        if (pilot.value === "") {
            alert("Please enter ALL items CORRECTLY and ACCURRATELY!!!!");
            event.preventDefault();
        } else if (!isNaN(pilot.value) || typeof pilot.value !== "string") {
            alert("Please enter ALL items CORRECTLY and ACCURRATELY!!!!");
            event.preventDefault();
        } else if (coPilot.value === "") {
            alert("Please enter ALL items CORRECTLY and ACCURRATELY!!!!");
            event.preventDefault();
        } else if (!isNaN(coPilot.value) || typeof coPilot.value !== "string") {
            alert("Please enter ALL items CORRECTLY and ACCURRATELY!!!!");
            event.preventDefault();
        } else if (fuel.value === "") {
            alert(" Please enter ALL items CORRECTLY and ACCURRATELY!!!!");
            event.preventDefault();
        } else if (isNaN(fuel.value)) {
            alert(" Please enter ALL items CORRECTLY and ACCURRATELY!!!!");
            event.preventDefault();
        } else if (mass.value === "") {
            alert(" Please enter ALL items CORRECTLY and ACCURRATELY!!!!");
            event.preventDefault();
        } else if (isNaN(mass.value)) {
            alert(" Please enter ALL items CORRECTLY and ACCURRATELY!!!!");
            event.preventDefault();
        } else {
            inputCorr = true;
        }
        const faultyItems = document.getElementById("faultyItems");

        const pilotStatus = document.getElementById("pilotStatus")
        pilotStatus.innerHTML = `Pilot Ready (${pilotName.value})`;

        const copilotStatus = document.getElementById("copilotStatus")
        copilotStatus.innerHTML = `Co-pilot Ready (${coPilotName.value})`;
        const fuelStatus = document.getElementById("fuelStatus");
        const cargoStatus = document.getElementById("cargoStatus");
        let cargoGood = true;
        let fuelEno = true;
        if (inputCorr) {
            launchStatus.innerHTML = "shuttle not yet ready";
            launchStatus.style.color = "red";
        }

        if (mass.value > 10000) {
            cargoStatus.innerHTML = "Please take more unnecessary stuff off in order to launch";
            faultyItems.style.visibility = "visible";
            launch.style.color = "red";
            cargoGood = false;
            launchStatus.innerHTML = "shuttle not yet ready";
        }
        if (fuel.value < 10000) {
            fuelStatus.innerHTML = "Please add more gas before launch";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not yet ready";
            faultyItems.style.visibility = "visibile";
            fuelEno = false;
        }
        if (cargoGood && fuelEno && inputCorr) {
            launchStatus.style.color = "green";
            faultyItems.style.visibility = "removed";
        }
    })
})


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/