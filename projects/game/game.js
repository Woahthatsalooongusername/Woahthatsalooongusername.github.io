let gameActive = true;
let haveLadder = false;
let haveKey = false;
let haveCheese = false;

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function Bedroom() {
    print("\nYou are in bedroom!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tHallway");
    
    function processInput(input){
        if (input.toLowerCase() === "hallway") {
            Hallway();
        } else {
            stayHere();
            waitThenCall(Bedroom);
        }
    }
    waitForInput(processInput);
}

function Hallway() {
    print("\nYou are in Hallway!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tBedroom\n\tBathroom");
    
    function processInput(input){
        if (input.toLowerCase() === "bedroom") {
            Bedroom();
	} else if (input.toLowerCase() === "bathroom") {
		Bathroom();
        } else {
            stayHere();
            waitThenCall(Hallway);
        }
    }   
    waitForInput(processInput);
}

function Bathroom() {

	print("\nbathroom");
	print("\nyou can go here:" +
	    "\n\tHallway");

function processInput(input){
	if (input.toLowerCase() === "bathroom") {
	    Bathroom();
	} else {
	    stayHere();
	    waitThenCall(Bathroom);
	}
    }
    waitForInput(processInput);
}






//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){	
    print("placeholder start");

    function processInput(input) {
            Bedroom();
    }
    waitForInput(processInput);
}
