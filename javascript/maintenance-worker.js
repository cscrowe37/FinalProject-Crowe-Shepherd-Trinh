// maintenance worker branch

let ghost = document.getElementById("ghost");
let nextBTN = document.getElementById("next");

export function startMaintenanceRoute(introElements) {
    // hide intro elements
    introElements.forEach(el => {
        if (el) {
            el.hidden = true;
            el.style.display = "none";
        }
    })


// change background
bg.style.backgroundImage = "url('../img/potentialBGs/Corridor.png')";

// center the ghost
ghost.style.position = "relative";
ghost.style.top = "50%";
ghost.style.transform = "translateY(100%)";

// moves next button to bottom right corner
nextBTN.style.position = "fixed";
nextBTN.style.bottom = "20px";
nextBTN.style.right = "40px";
nextBTN.style.fontSize = "20px";


// write your branch code here:
let maintenanceText = document.createElement("p");
maintenanceText.innerHTML = "I've possessed the maintenance worker. I wonder if theres something I can fix?";
maintenanceText.id = "maintenance-text";
bg.appendChild(maintenanceText);
}




