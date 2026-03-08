# Find The Cheese

## Setting

The game takes place in the player's house. 

## Map

```mermaid
graph TD;
    Closet-->YourRoom;
    YourRoom(((YourRoom)))-->Hallway;
    Hallway-->Bathroom;
    Hallway-->Stairs;
    Hallway-->Attic;
    Stairs-->Kitchen;
    Stairs-->LivingRoom;
    Stairs-->Garage;
    Stairs-->FrontDoor;
    FrontDoor-->Outside;
```

The player starts in their room.

## Story

Your pet mouse is hungry.
find the cheese before and give it to them before they get upset.

You have 20 moves before your time runs out

## Global Variables

my global variables  are
`haveCheese`,`haveLadder`, and `haveKey`

each of these are important because you will need to have these items in order
to continue the story.


