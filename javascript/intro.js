// for handling all the intro code



import { startCaptainRoute } from './captain.js';
import { startPassengerRoute } from './passenger.js';
import { startMaintenanceRoute } from './maintenance-worker.js';

let possessBTN = document.getElementById("story-button-1");
let bg = document.getElementById("bg");

let introElements = [];

introElements.push(document.getElementById("title"));
introElements.push(document.getElementById("para1"));
introElements.push(document.getElementById("para2"));
introElements.push(document.getElementById("para3"));




possessBTN.addEventListener("click", function(event) {
    event.preventDefault();
    possessBTN.hidden = true;
    possessBTN.style.display = "none";

    let maintenance_worker = document.createElement("button");
    maintenance_worker.innerHTML = "Maintenance Worker";
    maintenance_worker.id = "maintenance-worker-btn";

    let passenger = document.createElement("button");
    passenger.innerHTML = "Passenger";
    passenger.id = "passenger-btn";

    let captain = document.createElement("button");
    captain.innerHTML = "Captain";
    captain.id = "captain-btn";
    introElements.push(captain);
    introElements.push(passenger);
    introElements.push(maintenance_worker);


    bg.appendChild(captain);
    bg.appendChild(passenger);
    bg.appendChild(maintenance_worker);

    captain.addEventListener("click", function(event) {
        startCaptainRoute(introElements);
    });

    passenger.addEventListener("click", function(event) {
        startPassengerRoute(introElements);
    });

    maintenance_worker.addEventListener("click", function(event) {
        startMaintenanceRoute(introElements);
    });
});