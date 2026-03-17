let gameActive = true;
let haveMK = false;
let canBreakSeals = false;
let haveSB = false;
let brokeLockpick = false;
//-----------------------------------------------------
function Outside() { 
clear();

if (!haveSB) { 
           print("\nCurrent location: Outside");
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
	print("As you leave, You cast a firefall spell into the air");
	print("A brilliant blue blaze flies out of the pages like a jet");
	print("You cant wait to use this in another bank!");
	print("THE END - THANK YOU FOR PLAYING!!!!");
}
}

//-----------------------------------------------------

//----------------------------------------------------
function Frontdesk() {
clear();
    print("\nCurrent location: Frontdesk");
    print("\nThe vacant library glows slightly, almost as if it's reacting to your movement.");	
    print("\nWhere do you want to go next?" +
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
        print("\nWould you like to use your trusty lockpick?");
	print("\n\ttype Yes or No");

function processInput(input){ 
        if (input.toLowerCase() === "yes") {
		brokeLockpick = "true";
		print("Before you can put it in the keyhole, it disintegrates in your hand.");
		print("HOW???");
		setTimeout(function() {
		Frontdesk();
		},4000);
	} else if (input.toLowerCase() === "no") {
		print("You walk away to find another way in");
		setTimeout(function() {
		Frontdesk();
		},4000);
	} else { 
		stayHere();
		waitThenCall(Storageroom);
	}

} 
waitForInput(processInput);
}

if (brokeLockpick && !haveMK) {
	print("\nYou look at the pile of dust on the floor, formerly known as your lockpick");
	print("\nMust be those new and fancy security spells");
	print("\nPress enter to go back");

function processInput(input){ 
		Frontdesk();
}
waitForInput(processInput);
}

if (!brokeLockpick && haveMK) {
	print("\nYou use the master key and door unlocks");
	print("\nInside the Storage room, you see unused chairs and bookshelves collecting dust");
	print("\nYou see a book laying on the ground labeled `A Beginners Guide To Breaking Seals!`");
	print("\nYou quickly shove it into your bag");
	print("\npress enter to leave");

function processInput(input){
	canBreakSeals = "true";
		Frontdesk();
}
waitForInput(processInput);
}

if (brokeLockpick && haveMK) { 
	print("\nYou use the master key and door unlocks");
	print("\nYou breath a sigh of relief that it didnt disintegrate like your lockpick did.");
	print("\nInside the Storage room, you see unused chairs and bookshelves collecting dust");
	print("\nYou see a book laying on the ground labeled `A Beginners Guide To Breaking Seals!`");
	print("\nNow this makes up for the lockpick!");
	print("\nYou quickly shove it into your bag");
	print("\npress enter to leave");

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
	print("\nCurrent location: Bookshelves");
	print("\nYou briefly glance at the books as looking at every row in the magic library will probably take the entire night");
	print("\nYou see titles such as `The Origin Of Ice Magic` - Written by Davi the Snowman, and `Necromancy: A Guide To Raising The Dead` - Written by The Skeleton King");
	print("\nWhile these are interesting, They arent useful to you");
	print("\nWhere do you want to go next?" +
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
	print("\nCurrent location: Computer Lab");
	print("\nYou walk inside and see guard fast asleep at a desk.");
if (!haveMK) {
	print("\nHanging by their waist, You see a fat-looking key chain filled with keys of varying sizes on it. it is labeled `Master Key`");
	print("\nYou carefully take it without waking the guard up");
	print("\nPress enter to go back");
}

if (haveMK) {
	print("\nThere isnt much to do here now that you have the master key");
	print("\nThe guard is snoring loudly");
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
	print("\nCurrent Location: Staff only door");
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
	print("\nYou remember the book you found in the storage room and take it out.");
	print("\nyou recite an incantation and the seal breaks with a bubble poping sound");
	print("\nInside, you see The Spellbook sitting in the librarian's desk! You take it with a smug look on your face.");
	print("\nNow leave before anyone finds out!");
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

	print("\nCurrent location: Janitor's Closet");
	print("\nYou would expect a giant, magic library like this one to have cooler cleaning equiptment");
	print("\nBut no, Just a regular broom works apparently");
	print("\nHow boring");
	print("\npress enter to leave");
function processInput(input) {
	Staffonlydoor();

}
waitForInput(processInput);
}

 //-----------------------------------------------------
function start(){	
   print("You arrive at the magic library at midnight. everyone has long gone home ");
   print("For someone like you, this is the perfect time to strike!");
   print("You glance around, making sure nobody is watching, and start picking the lock on the front door ");
   print("You pull it off flawlessly!");
   print("Press enter to continue");

    function processInput(input) {
            Outside();
    }
    waitForInput(processInput);
}
