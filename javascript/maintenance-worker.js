// maintenance worker branch

let ghost = document.getElementById("ghost");
let nextBTN = document.getElementById("next");

// dialog tree
let introPrompt = new Array("I've possessed the maintenance worker. I wonder if theres something I can fix?",
    "That panel over there looks likes its broken, could that be what's causing the ship to crash?",
    "There is also a door leading into the hallway, maybe there's a bigger issue out there.",
    "Or maybe I could talk to the other maintenance worker over there to get a clue");
let panelPrompt = new Array("Okay, let's take a look at this panel", "Oh, I think I get it, these symbols are supposed to match, but it looks like they got misaligned", "I just need to realign them");
let leavePrompt = new Array("Alright, I've entered the cooridoor", "Oh, the lightbulb ahead looks likes its broken", "It's pretty close to the main control room and could be causing some issues");
let talkPrompt = new Array("Have you heard anything about what's causing the crash?", "Something in the main control room?");

let panelLeftPrompt = new Array("There doesn't appear to be anything over here", "I should keep looking");
let panelAheadPrompt = new Array("It looks like there's a light out up ahead.", "It's pretty close to the main control room", "Maybe that's whats causing the ship to crash.");
let panelRightPrompt = new Array("Nothing over here.", "I should keep looking");

let brokenLightPrompt = new Array("You've arrived at the broken lightbulb.", "Instructions", "Puzzle");



// current prompt and current line
let promptsArray = new Array(introPrompt, panelPrompt, leavePrompt, talkPrompt, panelLeftPrompt, panelAheadPrompt, panelRightPrompt, brokenLightPrompt);
let current_prompt = promptsArray[0];
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
    bg.style.backgroundImage = "url('../img/potentialBGs/Hangar.png')";

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

    nextScene(current_prompt[current_line]);


    // calls for next line to be shown and progresses to next line
    // stops going to next line when script is at its end
    nextBTN.addEventListener("click", function (event) {
        event.preventDefault();
        if (current_line < current_prompt.length) {
            nextScene(current_prompt[current_line]);
            current_line++
        }
        else if (current_line == current_prompt.length && current_prompt == introPrompt) { // calls the path buttons at the end of the passenger intro script
            addNewOption("Fix Broken Panel", "panel-BTN", 1, PanelPuzzle);
            addNewOption("Leave Room", "leave-room-BTN", 2, LeaveRoom);
            addNewOption("Talk to other Maintenance Worker", "talk-BTN", 3, TalkToOther);

            current_line++;
        }
    })


}


// changes text element
function Narration(line) {
    let maintenanceText = document.getElementById('maintenance-text');
    maintenanceText.innerHTML = line;
}

// updates line, updates background: keeps current background if none called, moves ghost if needed
function nextScene(line = '', scene = '_') {
    // Narration
    Narration(line);
    if (scene != '-') {
        // change background
    }
}

// used to create a new button
// pass in a name (assigned to the innerHTML of the button), id, prompt (reference to the prompts array), and function to call when clicked
function addNewOption(BTNname, BTNid, prompt, onClickAction) {
    let newBTN = document.createElement("button"); // creates new button
    newBTN.innerHTML = BTNname; // assigns it's name to its innerHTML
    newBTN.id = BTNid; // assignes its id

    bg.appendChild(newBTN); // appends to the background
    btns.push(newBTN); // adds to btns array

    newBTN.addEventListener("click", function (event) {
        current_prompt = promptsArray[prompt]; // starts the new text prompt
        current_line = 0;
        nextScene(current_prompt[current_line]);
        newBTN.hidden = true;
        newBTN.style.display = "none";
        if (typeof onClickAction === "function") { // this check makes passing in a function **optional**
            onClickAction(); // runs function attached to the button
        }
    })
}

// hides all buttons in the btns list
function hidePathButtons() {
    btns.forEach(el => {
        if (el) {
            el.hidden = true;
            el.style.display = "none";
        }
    })
}
// hides an individual button
function hideBTN(btnID){
    let btn = document.getElementById(btnID);
    btn.hidden = true;
    btn.style.display = "none";
}


// attached to: panel btn
function PanelPuzzle() {
    console.log("you chose the panel puzzle");
    hidePathButtons(); // hides other buttons
}

// attached to: leave room btn
function LeaveRoom() {
    hidePathButtons(); // hides other buttons
    bg.style.backgroundImage = "url('../img/potentialBGs/Corridor.png')";
    addNewOption("Look to The Left", "look-left", 4);
    addNewOption("Look Ahead", "look-ahead", 5, brokenLightbulb);
    addNewOption("Look to The Right", "look-right", 6);
    
}


// attached to: talk to maintenance worker btn
function TalkToOther() {
    hidePathButtons(); // hides other buttons
    console.log("You chose to talk to the other maintenance worker.")
}

function brokenLightbulb(){
    hidePathButtons();
    addNewOption("Go to Broken Lightbulb", "broken-lightbulb", 7, lightbulbPuzzle);
}

function lightbulbPuzzle(){
    console.log("lightbulb puzzle started.");
}






// Plans:
/*
 Panel puzzle:
    -timer
    -keydown listener

 Lightbulb puzzle:
    -keyboard input

 text leading up to main reactor puzzle
 Main reactor puzzle;
    -text input - HIDE A CLUE/Password leading up to the puzzle
    -text validation


loss/win

implement a timer the ticks down with every task, running out of time triggers a loss.
    -score/sanity tracking???

hint button at the top to give hints/instructions for the puzzles.
    -fulfills mouseover and mouseout listener + hidden div requirement



journal
    -journal requirement
*/
