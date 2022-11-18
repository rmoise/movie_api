<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/rmoise/myFlix_api">
    <img src="img/logo-readme.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">REST API - myFlix - Technical Case Study</h1>

  <p align="center">
    <a href="https://github.com/rmoise/myFlix_api/issues">Report Bug</a>
    ·
    <a href="https://github.com/rmoise/myFlix_api/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#objective">Objective</a>
    </li>
    <li><a href="#context">Context</a></li>
    <li>
      <a href="#the-5-ws">The 5 Ws</a>
    </li>
    <li><a href="#user-stories">User Stories</a></li>
    <li><a href="#essential-features">Essential Features</a></li>
    <li><a href="#technical-requirements">Technical Requirements</a></li>
    <li><a href="#endpoint-documentation">Endpoint Documentation</a></li>
    <li><a href="#built-with">Built With</a></li>
  </ol>
</details>

## Objective

To build the server-side component of a “movies” web application. The web  application will provide users with access to information about different  movies, directors, and genres. Users will be able to sign up, update their  personal information, and create a list of their favorite movies.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Context

It’s no longer enough for JavaScript developers to be alone skilled in Front-end development; it’s also essential for them to be able to interface with and even create their APIs. For this reason, I built a REST API for an application called “myFlix” that interacts with a database that stores data about different movies.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## My Role

-   Full-Stack Web Developer

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## The 5 W's

-   Who? — My immediate users will be frontend developers who'll work on the client-side for the application based on what's been documented on the server side. The users of the myFlix application could also be movie enthusiasts who enjoy reading information about different movies
-   What? — The complete server-side of my web application, including the server, business logic, and business layers of the application. It will consist of a well-designed REST API and
    architected database built using JavaScript, Node.js, Express, and MongoDB. The REST API is accessible via commonly used HTTP methods like GET and POST. Similar HTTP methods (CRUD) can be used to retrieve data from the database and store that data in a non-relational way
-   When? — Whenever users of myFlix are interacting with the application, the server-side of the application will be in use, processing their requests and performing operations against the
    data in the database. These users will be able to use the myFlix application whenever they like to read information about different movies or update their user information, for instance, their list of "Favorite Movies"
-   Where? — The application is hosted online. The myFlix application itself is responsive and can therefore be used anywhere and on any device, giving all users the same experience
-   Why? — Movie enthusiasts want to be able to access information about different movies, directors, and genres. The server-side of the myFlix application will ensure they have access to this information, that their requests are processed, and that all necessary data is stored.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## User Stories

-   As a user, I should be able to receive information on movies, directors, and genres so that I can learn more about movies I've watched or am interested in
-   As a user, I should be able to create an account and log into it so that I can save data about my favorite movies
-   As a web developer, I should be able to access the JSDoc Documentation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Essential Features

-   Return a list of ALL movies to the user
-   Return data (description, genre, director, image URL, whether it's featured or not) about a single movie by title to the user
-   Return data about a genre (description) by name/title (e.g., "Thriller")
-   Return data about a director (bio, birth year, death year) by name
-   Allow new users to register
-   Allow users to update their user info (username, password, email, date of birth)
-   Allow users to add a movie to their list of favorites
-   Allow users to remove a movie from their list of favorites
-   Allow existing users to delete their accounts
-   Allow web developers to access the JSDoc Documentation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technical Requirements

-   The API must be a Node.js and Express application
-   The API must use REST architecture, with URL endpoints corresponding to the data operations listed above
-   The API must use at least three middleware modules, such as the body-parser package for reading data from requests and morgan for logging
-   The API must use a "package.json" file
-   The database must be built using MongoDB
-   The business logic must be modeled with Mongoose
-   The API must provide movie information in JSON format
-   The JavaScript code must be error-free
-   The API must be tested in Postman
-   The API must include user authentication and authorization code
-   The API must include data validation logic
-   The API must meet data security regulations
-   The API source code must be deployed to a publicly accessible platform like GitHub
-   The API must be deployed to Heroku
-   The API must provide JSDoc Documentation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Endpoint Documentation

| Business Logic                                    | URL                              | HTTP Method | Request Body data format                                                                    | Response body data format                                                                                                        |
| ------------------------------------------------- | -------------------------------- | ----------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Display Welcome Page to the user                  | /                                | GET         | none                                                                                        | A text message welcoming the user                                                                                                |
| Get the list of all movies                        | /movies                          | GET         | None                                                                                        | JSON object containing data about all movies (ID, Title, Genre, Director, Description, Featured, imgUrl)                         |
| Get the data about a movie by title               | /movies/:title                   | GET         | None                                                                                        | A JSON object containing data about a single movie by name (ID, Title, Genre, Director, Description, Featured, imgUrl)           |
| Get the list of all genres                        | /genres                          | GET         | None                                                                                        | A JSON object containing data about all genres (ID, Name, Description)                                                           |
| Get the data about a genre by name                | /genres/:name                    | GET         | None                                                                                        | A JSON object containing data about genre by name (ID, Name, Description)                                                        |
| Get the list of all directors                     | /directors                       | GET         | None                                                                                        | A JSON object containing data about all directors (ID, Name, Bio, Birth)                                                         |
| Get the data about a director by name             | /directors/:name                 | GET         | None                                                                                        | A JSON object containing data about a director by name (ID, Name, Bio, Birth)                                                    |
| Get the list of all users                         | /users                           | GET         | None                                                                                        | A JSON object containing data about all users (ID, FavoriteMovies, Username, Password, Email, Birthday)                          |
| Get the data about a user by username             | /users/:username                 | GET         | None                                                                                        | A JSON object containing data about a single user by username (ID, FavoriteMovies, Username, Password, Email, Birthday)          |
| Add a new user                                    | /users                           | POST        | A JSON object containing data about a new user to add (Username, Password, Email, Birthday) | A JSON object containing data about the new user that was added (ID, FavoriteMovies, Username, Password, Email, Birthday)        |
| Update user info                                  | /users/:username                 | PUT         | A JSON object containing the updated data of the user (Username, Password, Email, Birthday) | A JSON object containing the updated data of the user (FavoriteMovies, Username, Password, Email, Birthday)                      |
| Delete an existing user                           | /users/:username                 | DELETE      | None                                                                                        | A text message indicating that the user has been deleted                                                                         |
| Add favorite movies to the list of favorites      | /users/:username/movies/:movieID | POST        | A JSON object holding data about the movie to add to the list of favorites                  | A JSON object containing the updated data of the users favorite movie and a text message indicating that a movie has been added. |
| Delete favorite movies from the list of favorites | /users/:username/movies/:movieID | DELETE      | None                                                                                        | A text message indicating that a favorite movie has been deleted from the list of favorites                                      |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<!-- prettier-ignore -->
* [![JavaScript][javascript.com]][javascript-url]
* [![Node][nodejs.com]][node-url]
* [![Mongo][mongo.com]][mongo-url]
* [![Express][express.com]][express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[javascript.com]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[javascript-url]: https://www.javascript.com
[nodejs.com]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/en/
[mongo.com]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[mongo-url]: https://www.mongodb.com/
[express.com]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[express-url]: https://expressjs.com/
