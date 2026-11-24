// maintenance worker branch

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

// write your branch code here:
let text = document.createElement("p");
text.innerHTML = "I've possessed the maintenance worker. I wonder if theres something I can fix?";
bg.appendChild(text);
}


