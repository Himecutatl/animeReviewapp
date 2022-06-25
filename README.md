### Your project idea 
>Brief 2-3 sentence description of your app

- An anime review app where family and friends can create personal lists or share reviews of shows/movies with each other. 

### MVP

- Home Page
-Displays popular media for both registered and unregistered users

-Sign Up
-Where new users can sign up for an account and login

-Anime Details
-Displays full details of media including summary, number of episodes (if applicable), average rating and production details (Studio, genre, etc)

-Media Review
-Allows users to submit a written review of the media as well as give a number/star rating (1-5)

### Stretch Goals

- Providing links to platforms where the media is viewable, both paid and free options.
- Trailers of the media available on the review and actual media information page.
- Implementing a social media-like "wall" function where users can post their reviews or thoughts on a "wall" viewable by other registered users.

### Front-end

- I plan on using EJS for the front-end.

### List of Mongoose models and their properties

- User
   firstName: String
   email: String
   password: String
   favorites: [userFavorites]

-Show/Movie
  title: String
  summary: String
  productionInfo: String
  averageRating: Number (subject to change)
  
-Review
  author/user: String
  userRating: Number
  reviewText: String

### List of Routes

- User
GET | /user/:id | Fetches specific user with Lists and recent ratings viewable
GET | /user/Signup | New user form
POST | /users | Creates new user

- Media
GET | / | Fetches main page with popular media examples present on the home page
GET | /anime/ | Fetches all the media
GET | /anime/:id | Fetches specific media with details page

- Reviews
GET | /reviews/ | Fetches all the reviews
GET | /reviews/new | New review form
POST | /reviews | Creates a new review
GET | /reviews/:animeId | Shows reviews for specific media
GET | /reviews/:id/edit | Form to edit a review written by user
PUT | /reviews/:id | Updates user review of specific media
DELETE | /reviews/:id | Deletes user review of specific media

### User stories
- As a new user I'd like to be able to make a new account with email and password credentials.
- As a registered user I'd like to be able to sign in with the credentials provided during sign up.
- As a registered user I'd like to openly browse a directory of shows and or movies.
- As a user I'd like information such as episode count, the production info (studio, VA's, etc), genres and other defining characteristics to be viewable for each show. 
- As a registered user I want to be able to leave a review with both a star (1-5) rating and a personalized written review.
- As a registered user I'd like to be able to make lists of media to share with others with my reviews included.
- As a registered user I want to be able to share my lists with both registered and unregistered users for accessibility.

### Wireframes
![IMG_2913](https://media.git.generalassemb.ly/user/42639/files/6e857746-0bdb-4617-8d3b-12d10511a7c2)

![IMG_2912](https://media.git.generalassemb.ly/user/42639/files/634c5114-b1e9-432f-8571-83ec23a215c8)

![IMG_2914](https://media.git.generalassemb.ly/user/42639/files/4ade67d7-e24d-46b4-b15e-922ffb59f1f8)


