# Google Books Search (React)
A React-based Google Books Search app.

---------------

[Links](#Links)
<br>
[UserStory](#UserStory)
<br>
[Description](#Description)
<br>
[Installation](#Installation)
<br>
[Usage](#Usage)
<br>
[FutureDevelopment](#FutureDevelopment)
<br>
---------------

## Links

[GitHub Repository:](https://github.com/RAMulc/googleBooksSearch)

[Deployed Application:](https://gooogleboookssearch.herokuapp.com/)

## **UserStory**

- As a user...
- I want to be able to search Google Books using any search criteria;
- So that I quickly view the results;
- Follow links to Google Books to see more information;
- Save the books of interest to my own database to retrieve later; and
- And remove items from my database that I no required.

## Description

This application uses two pages, as follows:

* Search:

  The user can search for books via the Google Books API and render them here. The user has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to a Mongo database.

  <img src="https://github.com/RAMulc/googleBooksSearch/blob/main/assets/img/Search.png" alt="Saved" style="zoom: 80%;" />

* Saved:

  Renders all the books saved to the Mongo database. The user has an option to "View" the book, taking them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

  <img src="https://github.com/RAMulc/googleBooksSearch/blob/main/assets/img/Saved.png" alt="Saved" style="zoom: 80%;" />

The application is built using a MERN stack:

- MongoDB - document database;
- Express(.js) - Node.js web framework;
- React(.js) - a client-side JavaScript framework;
- Node(.js) - the premier JavaScript web server.

The Mongo database stores the following for each saved book:

* `title` - The title of the book from the Google Books API;
* `authors` - The books' author(s) as returned from the Google Books API;
* `description` - The book's description as returned from the Google Books API;
* `image` - The Book's thumbnail image as returned from the Google Books API;
* `link` - The Book's information link as returned from the Google Books API.

Express routes for the application allow for:

- Retrieval of all saved books - (get);
- Saving of new books to the database - (post);
- Deletion of single entries from the database using :id - (delete).

The application is a Single Page Application (SPA)  which uses the [react-router-dom](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

The layout makes use of React Components for each page. 

## Installation

npm install to install the required packages.

npm Start to start the application. 

View the deployed application on [Heroku.](https://gooogleboookssearch.herokuapp.com/)

## Usage

npm start' at the command line to start the program or [load from the deployed application.](https://gooogleboookssearch.herokuapp.com/)


## FutureDevelopment

Future enhancements to include:

- Telling the user when a book is saved to the Mongo database;
- Where books already exist in the database, these are Identified in the searched books results;
- Improved styling;
- Use React routing and socket.io o create a notification or a component that triggers whenever a user saves an book.
- ....

---------------

[Take a look at my Portfolio...it was built with React!](https://ramulc.github.io/ReactPortfolio/)

