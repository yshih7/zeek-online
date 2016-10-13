import feathers from "feathers/client";
import socketio from "feathers-socketio/client";
import authentication from "feathers-authentication/client";
import hooks from "feathers-hooks";
import io from "socket.io-client";
import {Container} from "aurelia-dependency-injection";
import {Router} from "aurelia-router";

//If we actually went into production, we'd want to use conditional compilation or some other means to branch here
const socket = io("http://localhost:3030");
const app = feathers()
    .configure(hooks())
    .configure(socketio(socket))
    .configure(authentication({storage: localStorage}));

//Make sure to reauthenticate on socket upgrade
socket.io.engine.on("upgrade", async () =>
{
    if (!app.get("user")) return;
    
    try
    {
        await app.authenticate();
    }
    catch (err)
    {
        Container.instance.get(Router).navigateToRoute("login", {internalError: true});
    }
});

export default app;
export const users = app.service("users");
