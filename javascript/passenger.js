// passenger branch


let ghost = document.getElementById("ghost");
let nextBTN = document.getElementById("next");
//dialog passenger trees
let script1 = new Array ("I've possessed a passenger, I'm no hero, let's see if I can help just one person","line two","line three");
let path1 = new Array("p1l1","p1l2");
let path2 = new Array("p2l1","p2l2");
let path3 = new Array("p3l1","p3l2");
//background element
let bg = document.getElementById("bg");

//current script (path) and the current line
let scriptsArray = new Array(script1,path1,path2,path3);
let current_script = scriptsArray[0];
let current_line = 0;

//starts up the passenger Route
export function startPassengerRoute(introElements) {
    // hide intro elements
    introElements.forEach(el => {
        if (el) {
            el.hidden = true;
            el.style.display = "none";
        }
    })


// change background
bg.style.backgroundImage = "url('../img/potentialBGs/Quarters.jpg')";

// write your branch code here:

// moves next button to bottom right side bottom 3rd
nextBTN.style.position = "fixed";
nextBTN.style.bottom = "30%";
nextBTN.style.right = "40px";
nextBTN.style.fontSize = "20px";


//makes pasenger text element
let passengerText = document.createElement("p");
passengerText.innerHTML = " ";
passengerText.id = "passenger-text";
bg.appendChild(passengerText);





/// calls for next line to be shown and progresses to next line
// stops going to next line when script is at its end
nextBTN.addEventListener("click", function(event) {
    if (current_line < current_script.length){
    nextScene(current_script[current_line]);
    current_line ++;
    }
    //calls the path buttons at the end of the passenger intro script
    else if (current_line == current_script.length && current_script == script1){
        pathButtons();
        current_line ++;
    }
    
   
});


}

//changes text element
function Narration(line){
    let passengerText = document.getElementById('passenger-text');
    passengerText.innerHTML = line;
}

//updates line, updates background: keeps current background if none called, moves ghost if needed
//this needs to be updated to line holds previous value
function nextScene(line='',scene = '_'){
    //Narration
    Narration(line);
    //background
    if (scene != '_'){
        //change background
    }
}

//////////////////////////////////////////////////////
////////////////////path chosing buttons
function pathButtons(){

    let pathBNT1 = document.createElement("button");
    pathBNT1.innerHTML = "Path1";
    pathBNT1.id = "Path1";

    let pathBNT2 = document.createElement("button");
    pathBNT2.innerHTML = "Path2";
    pathBNT2.id = "Path2";

    let pathBNT3 = document.createElement("button");
    pathBNT3.innerHTML = "Path3";
    pathBNT3.id = "Path3";

    let pathBTNs = [];
    bg.appendChild(pathBNT1);
    bg.appendChild(pathBNT2);
    bg.appendChild(pathBNT3);
    pathBTNs.push(pathBNT1);
    pathBTNs.push(pathBNT2);
    pathBTNs.push(pathBNT3);

    pathBNT1.addEventListener("click", function(event) {
            //switch current script to path1, reset current_line
            console.log('path1');
            current_script = scriptsArray[1];
            current_line = 0;
            //hide buttons
            hidePathButtons();

        });
    pathBNT2.addEventListener("click", function(event) {
            //switch current script to path2, reset current_line
            console.log('path2');
            current_script = scriptsArray[2];
            current_line = 0;
            //hide buttons
            hidePathButtons();
        });
    pathBNT3.addEventListener("click", function(event) {
            //switch current script to path3, reset current_line
            console.log('path3');
            current_script = scriptsArray[3];
            current_line = 0;
            //hide buttons
            hidePathButtons();
        });
    //function to hide path buttons. is called in each path button
    function hidePathButtons(){
        pathBTNs.forEach(el => {
        if (el) {
            el.hidden = true;
            el.style.display = "none";
        }})}
    







}





