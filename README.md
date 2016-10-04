# penultima-online

A client for playing Penultima online

## Project structure
The server and client code are in separate, nested projects for simplicity

## Building the front-end code
The front-end root is `client/`.

From the front-end root, run `npm install` to install dependencies.

Run `npm run build` to compile the code.

## Running the server
To set up, make sure you have the latest versions of NodeJS and NPM installed (http://nodejs.org).
You also need to install [RethinkDB](https://www.rethinkdb.com/) for the database.

From the project root, run `npm install` to install dependencies.

Run `npm run build` to compile the code.

Make sure to also compile the front-end code before starting the server.

To start the server, in one terminal, run  `rethinkdb` to start the database server,
then, in a second terminal, run `npm start` from the project root to start the web server. The website should be available at http://localhost:3030
