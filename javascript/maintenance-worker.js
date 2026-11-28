// maintenance worker branch

let ghost = document.getElementById("ghost");
let nextBTN = document.getElementById("next");

// dialog tree
let introPrompt = new Array ("I've possessed the maintenance worker. I wonder if theres something I can fix?", 
    "That panel over there looks likes its broken, could that be what's causing the ship to crash?", 
    "There is also a door leading into the hallway, maybe there's a bigger issue out there.",
    "Or maybe I could talk to the other maintenance worker over there to get a clue");
let prompt1 = new Array ("Okay, let's take a look at this panel", "Oh, I think I get it, these symbols are supposed to match, but it looks like they got misaligned", "I just need to realign them");
let prompt2 = new Array ("Alright, I've entered the cooridoor", "Oh, the lightbulb ahead looks likes its broken", "It's pretty close to the main control room and could be causing some issues");
let prompt3 = new Array ("Have you heard anything about what's causing the crash?", "Something in the main control room?");

// current prompt and current line
let promptsArray = new Array(introPrompt, prompt1, prompt2, prompt3);
let current_prompt =  promptsArray[0];
let current_line = 0;

// buttons array
let btns = [];


// starts the maintenance worker route
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
nextBTN.style.bottom = "30px";
nextBTN.style.right = "40px";
nextBTN.style.fontSize = "20px";
nextBTN.style.zIndex = 10;


// write your branch code here:
let maintenanceText = document.createElement("p");
maintenanceText.innerHTML = "";
maintenanceText.id = "maintenance-text";
bg.appendChild(maintenanceText);

// calls for next line to be shown and progresses to next line
// stops going to next line when script is at its end
nextBTN.addEventListener("click", function(event){
    event.preventDefault();
    if(current_line < current_prompt.length){
        nextScene(current_prompt[current_line]);
        current_line++
    }
    else if (current_line == current_prompt.length && current_prompt == introPrompt)
    { // calls the path buttons at the end of the passenger intro script
        addNewOption("Fix Broken Panel", "panel-BTN", 1, PanelPuzzle);
        addNewOption("Leave Room", "leave-room-BTN", 2, LeaveRoom);
        addNewOption("Talk to other Maintenance Worker", "talk-BTN", 3, TalkToOther);
        
        current_line ++;
    }
})


}


// changes text element
function Narration(line){
    let maintenanceText = document.getElementById('maintenance-text');
    maintenanceText.innerHTML = line;
}

// updates line, updates background: keeps current background if none called, moves ghost if needed
function nextScene(line='', scene = '_'){
    // Narration
    Narration(line);
    if (scene != '-'){
        // change background
    }
}

// create new path choosing buttons

function addNewOption(BTNname, BTNid, prompt, onClickAction){
    let newBTN = document.createElement("button");
    newBTN.innerHTML = BTNname;
    newBTN.id = BTNid;

    bg.appendChild(newBTN);
    btns.push(newBTN);

    newBTN.addEventListener("click", function(event){
        current_prompt = promptsArray[prompt];
        current_line = 1;
        if(typeof onClickAction === "function"){
            onClickAction();
        }
        hidePathButtons();
    })
}

    function hidePathButtons(){
        btns.forEach(el => {
            if (el) {
                el.hidden = true;
                el.style.display = "none";
            }
        })
    }

function PanelPuzzle(){
    console.log("you chose the panel puzzle");
}

function LeaveRoom(){
    console.log("You chose to leave the room");
}

function TalkToOther(){
    console.log("You chose to talk to the other maintenance worker.")
}





