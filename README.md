# Where's Wally Project - Frontend

Where's Wally App (part of the Odin Project curriculum). Also see backend repository at: github.com/Melanie-J-Baker/wheres-wally-api

Built using React (fetching from an Express and MongoDB backend).

Try the app here: https://melanie-j-baker.github.io/wheres-wally/

Try the API here: https://wheres-wally-api.glitch.me

Very similar to a photo tagging app. A large photograph containing several elements the user is meant to find, e.g. Waldo, The Wizard, Wilma etc. User can make selections for each character and they will be given feedback on whether they are correct or not.

When the user clicks the photo, it places a targeting box around the portion of the photo the user has clicked. That box contains a list of possible characters. When the user selects one of these characters, app checks with backend to see if that character is within the targeting box. Provides user with appropriate feedback (e.g. if wrong, an error message). If correct, places a marker on the photo in the character’s location. In either case, removes the targeting box until the user clicks again.

Keeps track of how long it takes from when the photo is first loaded to when the user finally identifies all of the characters. Once a round is complete, asks the user for their name and records time.

I implemented methods to click logic to normalize coordinates across different screensizes.

Project screenshots:
![image](https://github.com/Melanie-J-Baker/wheres-wally/assets/104843873/1cf39af5-79fa-4b4a-96c3-065a8c90f824)
![image](https://github.com/Melanie-J-Baker/wheres-wally/assets/104843873/25b19635-1853-4a9c-ab70-90a899e021d7)
![image](https://github.com/Melanie-J-Baker/wheres-wally/assets/104843873/1b5d0d20-a484-4619-b00d-b9fec31a3ec0)
