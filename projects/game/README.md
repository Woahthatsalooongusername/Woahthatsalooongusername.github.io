# Find The Spellbook

## Setting

The game takes place in a magic library. There are some guards around whom the player must avoid 

## Map

```mermaid
graph TD;
    Outside(((Outside)))-->Frontdesk;
    Frontdesk-->Bookshelves;
    Frontdesk-->Meetingroom
    Bookshelves-->Computerlab;
    Bookshelves-->StaffOnlyDoor;
    StaffOnlyDoor-->HeadLibrarian'sOffice;
    StaffOnlyDoor-->Janitor'sCloset;
```

The player starts outside

## Story

You are a theif, looking for the librarian's spellbook to help you steal from more people
find it and escape
## Global Variables

my global variables  are
`haveKey` and `canBreakSeals` 

each of these are important because you will need to have these items in order
to continue the story.


