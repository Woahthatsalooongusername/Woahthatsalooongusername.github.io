let gameActive = true;
let haveMK = false;
let canBreakSeals = false;
let haveSB = false;
let brokeLockpick = false;
//-----------------------------------------------------
function Outside() { 
clear();

if (!haveSB) { 
           print("\nloc: outside");
           print("\nType the corresponding number to move:" +
               "\n\tA ~ Frontdesk");
   
   function processInput(input){ 
           if (input.toLowerCase() === "a") {
               Frontdesk();
           } else { 
               stayHere();
              waitThenCall(Outside);
           } 
       } 
       waitForInput(processInput);
}
if (haveSB) {
	print("YOU ESCAPED");
}
}

//-----------------------------------------------------

//----------------------------------------------------
function Frontdesk() {
clear();
    print("\nloc: frontdesk");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tA ~ Outside\n\tB ~ Meetingroom\n\tC ~ Bookshelves");

    function processInput(input){
        if (input.toLowerCase() === "a") {
            Bookshelves();
	} else if (input.toLowerCase() === "b") {
		Meetingroom();			
	} else if (input.toLowerCase() === "c") {
		Outside();
        } else {
            stayHere();
            waitThenCall(Frontdesk);
        }
    }   
    waitForInput(processInput);
}
 //-----------------------------------------------------
function Meetingroom() {
clear();

        print("\nYou are in the meetingroom");
        print("\npress enter to leave");

function processInput(input){ 
        if (input.toLowerCase() === "a") {
		brokeLockpick = "true";
		
			Frontdesk();

} 
waitForInput(processInput);
} 
}





//---------------------------------------------------------
function Bookshelves() {
clear();
	print("\nloc: bookshelves");
	print("\nyou can go here:" +
	    "\n\tA ~ Frontdesk\n\tB ~ Staffonlydoor\n\tC ~ Computerlab");

function processInput(input){
	if (input.toLowerCase() === "c") {
	    Computerlab();
	} else if (input.toLowerCase() === "b") {
	    Staffonlydoor();
	} else if (input.toLowerCase() === "a") {
	    Frontdesk();
	} else {
	    stayHere();
	    waitThenCall(Bookshelves);
	}
    }
    waitForInput(processInput);
}

 //-----------------------------------------------------
function Computerlab() {
clear();

if (!haveMK) {
	print("\nloc computerlab");
	print("\nYou found the master key");
	print("\npress enter to go back");
}
if (haveMK){
	print("\nloc computerlab");
	print("\nYou already have the master key");
	print("\npress enter to go back");
}

    function processInput(input) {
	haveMK = "true";
        Bookshelves();
}
waitForInput(processInput);
}



//-------------------------------------------------------
function Staffonlydoor() {
clear();
	print("\nloc: staffonlydoor");
	print("\nHere are your options:" +
		"\n\tA ~ Bookshelves\n\tB ~ Head librarian's office\n\tC ~ Storageroom");

function processInput(input){
	if (input.toLowerCase() === "a") {
		Bookshelves();
	} else if (input.toLowerCase() === "b") {
		Headlibrariansoffice();
	} else if (input.toLowerCase() === "c") {
		Storageroom();
	} else {
		stayHere();
		waitThenCall(Staffonlydoor);
	}
}
waitForInput(processInput);
}

//-------------------------------------------------------
function Headlibrariansoffice() {
clear();
	print("\nYou are in the Head librarian's office");
	print("\npress enter to leave");

function processInput(input){
	Staffonlydoor();
}
waitForInput(processInput);
}

//------------------------------------------------------
function Storageroom() { 
clear();

	print("\nloc: storageroom");
	print("\npress enter to leave");
function processInput(input) {
	Staffonlydoor();

}
waitForInput(processInput);
}

 //-----------------------------------------------------
function start(){	
   print("placeholder start");

    function processInput(input) {
            Outside();
    }
    waitForInput(processInput);
}
