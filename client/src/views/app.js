import app from "../services";
import {Redirect} from "aurelia-router";

class AuthPipelineStep
{
    run(instruction, next)
    {
        //If we're navigating to a route that requires you to be logged in, and you're not logged in, redirect to login
        if (instruction.getAllInstructions().some(i => i.config.settings && i.config.settings.auth) && !app.get("user"))
        {
            return next.cancel(new Redirect("login", {notLoggedIn: true}));
        }
        else return next();
    }
}

export class App
{
    configureRouter(config, router)
    {
        config.title = "Penultima Online";
        config.map([
            {route: ["", "home"], name: "home", moduleId: "./home", nav: true, title: "Home", settings: {auth: false}},
            {route: "login", name: "login", moduleId: "./login", nav: false, title: "Login", settings: {auth: false}},
            {route: "signup", name: "signup", moduleId: "./signup", nav: false, title: "Create Account", settings: {auth: false}},
            {route: "profile", name: "profile", moduleId: "./profile", nav: false, title: "Profile", settings: {auth: true}}
        ]);

        config.addAuthorizeStep(new AuthPipelineStep());

        this.router = router;
    }
}
