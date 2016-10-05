import feathers from "feathers/client";
import socketio from "feathers-socketio/client";
import hooks from "feathers-hooks";
import io from "socket.io-client";

//If we actually went into production, we'd want to use conditional compilation or some other means to branch here
const socket = io("http://localhost:3030");
const app = feathers()
    .configure(hooks())
    .configure(socketio(socket));

export const users = app.service("users");
