let gameActive = true;
let haveMK = false;
let canBreakSeals = false;
let haveSB = false;
//-----------------------------------------------------
function Outside() { 
clear();
           print("\nloc: outside");
           print("\nyou can go here:" +
               "\n\tFrontdesk");
   
   function processInput(input){ 
           if (input.toLowerCase() === "frontdesk") {
               Frontdesk();
           } else { 
               stayHere();
              waitThenCall(Outside);
           } 
       } 
       waitForInput(processInput);
}

//-----------------------------------------------------

//----------------------------------------------------
function Frontdesk() {
clear();
    print("\nloc: frontdesk");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tBookshelves\n\tMeetingroom\n\tOutside");

    function processInput(input){
        if (input.toLowerCase() === "bookshelves") {
            Bookshelves();
	} else if (input.toLowerCase() === "meetingroom") {
		Meetingroom();			
	} else if (input.toLowerCase() === "outside") {
		Outside();
        } else {
            stayHere();
            waitThenCall(Hallway);
        }
    }   
    waitForInput(processInput);
}
 //-----------------------------------------------------
function Meetingroom() {
clear();

	print("\nloc: meetingroom");
	print("\nPress Enter to go back");
function processInput(input) {
	Frontdesk();
}
waitForInput(processInput);
}



//---------------------------------------------------------
function Bookshelves() {
clear();
	print("\nloc: bookshelves");
	print("\nyou can go here:" +
	    "\n\tComputerlab\n\tStaffonlydoor");

function processInput(input){
	if (input.toLowerCase() === "computerlab") {
	    Computerlab();
	} else if (input.toLowerCase() === "staffonlydoor") {
	    Staffonlydoor();
	} else {
	    stayHere();
	    waitThenCall(Bookshelves);
	}
    }
    waitForInput(processInput);
}
/*
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
if (!haveCrowbar) {
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

if (haveCrowbar){ 
	print("\nCheese get");
	print("\nYou can go here:" +
		"\n\tLivingRoom");

function processInput(input){
	haveCheese = true;
	if (input.toLowerCase() === "livingroom") {
		LivingRoom();
		 } else {
			 stayHere();
			 waitThenCall(Kitchen);
		}
}
waitForInput(processInput);
}
}
//------------------------------------------------------
function Garage() { 
clear();

if (!haveLadder) { 
	print("\nLadder get");
	print("\nYou can go here:" +
		"\n\tLivingRoom");
function processInput(input) {
	haveLadder = true;
	if (input.toLowerCase() === "livingroom") {
		LivingRoom();
	} else {
		stayHere();
		waitThenCall(Garage);
	}
}
waitForInput(processInput);
}

if (haveLadder) {
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
}
*/
 //-----------------------------------------------------
function start(){	
   print("placeholder start");

    function processInput(input) {
            Outside();
    }
    waitForInput(processInput);
}
