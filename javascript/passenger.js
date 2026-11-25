// passenger branch


let ghost = document.getElementById("ghost");
let nextBTN = document.getElementById("next");

let script = new Array ('line one','line two','line three');
let current_line = 0;

export function startPassengerRoute(introElements) {
    // hide intro elements
    introElements.forEach(el => {
        if (el) {
            el.hidden = true;
            el.style.display = "none";
        }
    })


// change background
let bg = document.getElementById("bg");
bg.style.backgroundImage = "url('../img/potentialBGs/Quarters.jpg')";

// write your branch code here:

// moves next button to bottom right side bottom 3rd
nextBTN.style.position = "fixed";
nextBTN.style.bottom = "30%";
nextBTN.style.right = "40px";
nextBTN.style.fontSize = "20px";


//makes pasenger text element
let passengerText = document.createElement("p");
passengerText.innerHTML = "I've possessed a passenger, I'm no hero, let's see if I can help just one person";
passengerText.id = "passenger-text";
bg.appendChild(passengerText);




//narration call example
Narration('next line');


/// calls for next line to be shown and progresses to next line
nextBTN.addEventListener("click", function(event) {
   
    nextScene(script[current_line]);
    current_line ++;
   
});


}

//changes text element
function Narration(line){
    let passengerText = document.getElementById('passenger-text');
    passengerText.innerHTML = line;
}

//updates line, updates background: keeps current background if none called, moves ghost if needed
function nextScene(line='',scene = '_'){
    Narration(line);
    if (scene != '_'){
        //change background
    }
        



}