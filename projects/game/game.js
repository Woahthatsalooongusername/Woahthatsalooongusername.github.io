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
           print("\nType the corresponding acronym to move:" +
               "\n\tFD ~ Frontdesk");
   
   function processInput(input){ 
           if (input.toLowerCase() === "fd") {
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
        "\n\tO ~ Outside\n\tSR ~ Storageroom\n\tBS ~ Bookshelves");

    function processInput(input){
        if (input.toLowerCase() === "bs") {
            Bookshelves();
	} else if (input.toLowerCase() === "sr") {
		Storageroom();			
	} else if (input.toLowerCase() === "o") {
		Outside();
        } else {
            stayHere();
            waitThenCall(Frontdesk);
        }
    }   
    waitForInput(processInput);
}
 //-----------------------------------------------------
function Storageroom() {
clear();

if (!brokeLockpick && !haveMK) {
        print("\nYou try to open the storage room. it is locked.");
        print("\nuse lockpick?");
	print("\n\ttype Yes or No");

function processInput(input){ 
        if (input.toLowerCase() === "yes") {
		brokeLockpick = "true";
		print("it broke");
		setTimeout(function() {
		Frontdesk();
		},3000);
	} else if (input.toLowerCase() === "no") {
		print("You walk away to find another way in");
		setTimeout(function() {
		Frontdesk();
		},3000);
	} else { 
		stayHere();
		waitThenCall(Storageroom);
	}

} 
waitForInput(processInput);
}

if (brokeLockpick && !haveMK) {
	print("\nYou try to open the door again, but it's still locked.");
	print("\nPress enter to go back");

function processInput(input){ 
		Frontdesk();
}
waitForInput(processInput);
}

if (!brokeLockpick && haveMK) {
	print("\nYou use the master key and door unlocks");
	print("\nput story here. also you can break seals now");
	print("\npress enter to leave");

function processInput(input){
	canBreakSeals = "true";
		Frontdesk();
}
waitForInput(processInput);
}

if (brokeLockpick && haveMK) { 
	print("\nYou use the master key and door unlocks");
	print("\nif only you found this before breaking your lockpick. also you can break seals now");
	print("\npress enter to leave");

function processInput(input){ 
	canBreakSeals = "true";
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
	    "\n\tFD ~ Frontdesk\n\tSOD ~ Staffonlydoor\n\tCL ~ Computerlab");

function processInput(input){
	if (input.toLowerCase() === "cl") {
	    Computerlab();
	} else if (input.toLowerCase() === "sod") {
	    Staffonlydoor();
	} else if (input.toLowerCase() === "fd") {
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
	print("\nloc computerlab");
	print("\nYou walk inside and see guard fast asleep at a desk.");
if (!haveMK) {
	print("\nHanging by their waist, You see a fat-looking key chain with keys of varying colors on it. it is labeled `Master Key`");
	print("\nYou carefully take it without waking the guard up");
	print("\nPress enter to go back");
}

if (haveMK) {
	print("\nThere isnt much to do here now that you have the master key");
	print("\nPress enter to go back");
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
		"\n\tBS ~ Bookshelves\n\tHLO ~ Head librarian's office\n\tJC ~ Janitor's Closet");

function processInput(input){
	if (input.toLowerCase() === "bs") {
		Bookshelves();
	} else if (input.toLowerCase() === "hlo") {
		Headlibrariansoffice();
	} else if (input.toLowerCase() === "jc") {
		JanitorCloset();
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

if (!canBreakSeals) {
	print("\nYou try to open the door");
	print("\nBut this time, there is a transparent, glowing orb on the doorknob"); 
	print("\nIt kind of looks like a magic seal"); 
	print("\npress enter to leave");

function processInput(input){
	Staffonlydoor();
}
waitForInput(processInput);
}

if (canBreakSeals) {
	haveSB = "true";
	print("\nYou remember what you learned and recite the incantation");
	print("\nIts a success! The seal breaks with a bubble poping sound");
	print("\nYou got the spellbook!");
	print("\nNow leave before anyone finds out");
	print("\npress enter to leave");

	function processInput(input){
		 Staffonlydoor();
	}
	waitForInput(processInput);
}
}

//------------------------------------------------------
function JanitorCloset() { 
clear();

	print("\nloc: Janitor's Closet");
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
