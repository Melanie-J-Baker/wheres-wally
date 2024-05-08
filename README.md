# Where's Wally Project (part of the Odin Project curriculum) - Frontend (also see backend repo at: github.com/Melanie-J-Baker/wheres-wally-api)

Built using React (fetching from an Express and MongoDB backend).

Very similar to a photo tagging app. A large photograph containing several elements the user is meant to find, e.g. Waldo, The Wizard, Wilma etc. User can make selections for each character and they will be given feedback on whether they are correct or not.

When the user clicks the photo, it places a targeting box around the portion of the photo the user has clicked. That box contains a list of possible characters. When the user selects one of these characters, app checks with backend to see if that character is within the targeting box. Provides user with appropriate feedback (e.g. if wrong, an error message). If correct, places a marker on the photo in the character’s location. In either case, removes the targeting box until the user clicks again.

Keeps track of how long it takes from when the photo is first loaded to when the user finally identifies all of the characters. Once a round is complete, asks the user for their name and records time. 

I implemented methods to click logic to normalize coordinates across different screensizes.
