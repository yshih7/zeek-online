# penultima-online
A client for playing Penultima online

## Project structure
The server and client code are in separate, nested projects for simplicity
The server code is rooted at the project root; the front-end root is `client/`.

The server is written using the [Feathers](http://feathersjs.com) web framework (Derived from [Express](http://expressjs.com)) and [RethinkDB](https://www.rethinkdb.com/).

The client is written using [Aurelia](http://aurelia.io), a modern SPA framework with client-side routing and rendering.

## Building the front-end code
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

## Running the tests
Unit tests are written using the [Jasmine](http://jasmine.github.io) testing framework.

For the server, tests should be placed in `server/src/test/`.
For the client, tests should be placed in `client/test/unit/`.
All tests should be in files with the extension `.spec.js`.

To run server-side tests, simply run `jasmine` from the project root.
To run client-side tests, run `npm run test` from `client/`.
