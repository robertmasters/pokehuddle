
# PokeHuddle: Roadmap to creating application

---
## API's:
1.	pokemon general information: https://pokeapi.co/ 
2.	pokemon Card information: https://dev.pokemontcg.io/


## resources
Wireframes: https://whimsical.com/pokemon-application-7tNN3rjxmqemQ67dHWQ5tn

Text generator: https://textcraft.net/style/Textcraft/pokemon

Pokemon Images: https://www.pokemon.com/us/pokedex/

---
## what is the intention of the application? 
#### Personal Space for pokemon fans.
## MVPs:
1. MVP1: to use it as a personal hub for pokemon information, able to favorite pokemon, and view most favorited pokemon by a favorited vote tally.
2. MVP2: make mvp1 into an android app using android studio and kotlin
3. MVP3: able to research pokemon cards and able to favorite them, search by type, number, generation, through search box(number), through drop down list(type, generation)
3. MVP3: able to create a roadmap on a pokemon card collection checklist
4. MVP4: able to upload pokemon art and save random pokemon notes
5. MVP5: then publish your own pokemon social front.
6. MVP6: able to comment on other peoples social front
7. MVP7: able to like other peoples social front,
8. MVP8: able to view other peoples pokemon card journey
9. MVP9: able to favorite other people
---
## future plans: 
* collective pokemon card leaderboards
* Game Walkthroughs
* upload videos
---
## problems:
* need a way to make login and username authentication:
* need a way to create a user with name, username, password, favorite pokemon(this will be a list), preffered image for avatar: 
* need to save favorite pokemon(this will save the endpoint needed to retrieve that pokemon data from external API)
* need to save preffered image for avatar
	* image will be a selection of 10 different pokemon. 
* need to save favorited pokemon so that the pokemon can have a leaderboard:
	* if a user saves a pokemon, then that pokemon will have a tally that will be sent to the leaderboard to populate the pokemon with the most saves
---
## tech stack?
### Front end:
* Deploy: Vercel
* Css, Html5
* Js React
* Reddux?
* Testing-library, Jest, not enzyme since its not set up for react v17 yet
* Form API: React-hook-form, testing: https://react-hook-form.com/advanced-usage#TestingForm

### Backend:
* deploy: heroku
* Framework: Spring(try using Kotlin?)

---

### how to start?
##### what needs to be implemented first?
* a way to log in, send the token out and then return that token and keep it in local storage, until the log out button is clicked.

### first steps:
1. so first thing that needs to be done is a form page -> this will be the landing page with a  login option, once this login page has been made then the landing dashboard page can be made.
***deploy on vercel as soon as first steps have been completed.

#### second step:
[] build the backend, with just the user authentication aspect of it. all that needs to be made is a user with a name, username, and password. 
deploy on heroku as soon as second step has been completed.

#### third step:
[] code the functionality for the dashboard to absorb the pokemon api
this means that the dashboard search button will trigger an api get call, also the Research pokemon will triger an api get call as well but this call will default to pikachu. 

#### fourth step:
[] Backend task, build the ability to favorite pokemon and for pokemon to keep a tally of how many users have favorited them.
after this has been built I can then mess around with the leaderboards and Favorite pokemon page

#### fith step:
[] figure out how to use have the user choose between 5 different avatars
may need to be a backend call and will have to be an api put funtion that will send the desired avatar to the back end, may have to use an external server to hold all the images, or maybe they can be held in heroku. Research this aspect

#### sixth step:
[]  create the personal Notes section:
will need to add the personal Notes to the user as a list of notes, this task will require backened coding
will need to add form functionality to the notes then a put call that will add the note to the user on the back end.

#### 7th step:
[] create seed data: 
at least 5 users so that the leaderboard can show realistic collective results

#### 8th step
[] figure out how to upload photos into the backend using heroku as the image host. 
will need to probably add a personal photos list to the user on the back end

#### 9th step:
[] make all the website responsive for pc, tablet, and mobile use

#### 10th step:
[] build an app for the website using Android Studio with Kotlin
this will require me to repeat the steps from 1-9 except exclude any steps that call for backend tasks as the back end will have been made by now.
