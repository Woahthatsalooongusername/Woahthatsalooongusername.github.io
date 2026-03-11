let gameActive = true;
let haveLadder = false;
let haveCrowbar = false;
let haveCheese = false;
//-----------------------------------------------------
function Bedroom() {
clear();
    print("\nYou are in the bedroom!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tHallway");
    
    function processInput(input){
	    Hallway();
    }
    waitForInput(processInput);
}
//-----------------------------------------------------

//----------------------------------------------------
function Hallway() {
clear();
    print("\nYou are in the Hallway!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tBedroom\n\tBathroom\n\tAttic\n\tStairs");

    function processInput(input){
        if (input.toLowerCase() === "bedroom") {
            Bedroom();
	} else if (input.toLowerCase() === "bathroom") {
		Bathroom();
	} else if (input.toLowerCase() === "stairs") {
		Stairs();
	} else if (input.toLowerCase() === "attic") {
		Attic();
			
        } else {
            stayHere();
            waitThenCall(Hallway);
        }
    }   
    waitForInput(processInput);
}
 //-----------------------------------------------------
function Attic() {
clear();

if (haveLadder) {
	print("\ncrowbar get");

function processInput(input) {
	haveCrowbar = "true";
	Hallway();
}
waitForInput(processInput);
}
    print("You tried to reach for the latch on the ceiling...");
    print("\nbut it was too high up. Maybe theres a ladder somewhere?");
    print("\nPress Enter to go back");

	function processInput(input){
		Hallway();
    }
	waitForInput(processInput);
}
//---------------------------------------------------------
function Bathroom() {
clear();
	print("\nyou are in the bathroom");
	print("\nyou can go here:" +
	    "\n\tHallway");

function processInput(input){
	if (input.toLowerCase() === "hallway") {
	    Hallway();
	} else {
	    stayHere();
	    waitThenCall(Bathroom);
	}
    }
    waitForInput(processInput);
}
 //-----------------------------------------------------
function Stairs() {
clear();
	print("\nYou took the stairs");
	print("\ngo here:" +
		"\n\tLivingRoom  <----  leads to 1st floor\n\tHallway  <----  leads to 2nd floor");

function processInput(input){
	if (input.toLowerCase() === "hallway") {
		Hallway();
	} else if (input.toLowerCase() === "livingroom") {
		LivingRoom();
	} else {
		stayHere();
		waitThenCall(Stairs);
	}
}
waitForInput(processInput);
}
//-------------------------------------------------------
function LivingRoom() {
clear();
	print("\nYou are in the living room");
	print("\nHere are your options:" +
		"\n\tStairs\n\tKitchen\n\tGarage");

function processInput(input){
	if (input.toLowerCase() === "stairs") {
		Stairs();
	} else if (input.toLowerCase() === "kitchen") {
		Kitchen();
	} else if (input.toLowerCase() === "garage") {
		Garage();
	} else {
		stayHere();
		waitThenCall(LivingRoom);
	}
}
waitForInput(processInput);
}
//-------------------------------------------------------
function Kitchen() {
clear();

	print("\nYou are in the kitchen");
	print("\nYou can go here:" +
		"\n\tLivingRoom");

function processInput(input){
	if (input.toLowerCase() === "livingroom") {
		LivingRoom();
	} else {
		stayHere();
		waitThenCall(Kitchen);
	}
}
waitForInput(processInput);
}
//------------------------------------------------------
function Garage() { 
clear();

if (!haveLadder) { 
	print("\nLadder get");

function processInput(input) {
	haveLadder = true;
	Garage();
}
waitForInput(processInput);
}

        print("\nYou are in the garage");
        print("\nYou can go here:" +
                "\n\tLivingRoom");

function processInput(input){ 
        if (input.toLowerCase() === "livingroom") {
                LivingRoom();
 	} else {
                stayHere();
                waitThenCall(Garage);
        }
   } 
   waitForInput(processInput);
}
 //-----------------------------------------------------
function start(){	
   print("placeholder start");

    function processInput(input) {
            Bedroom();
    }
    waitForInput(processInput);
}
