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
    loggedIn = false;
    displayName = "";
    loginName = "";

    activate()
    {
        const user = app.get("user");
        if (user)
        {
            this.loggedIn = true;
            this.displayName = user.displayName;
            this.loginName = user.loginName;
        }
    }

    logout()
    {
        app.logout();
        this.loggedIn = false;
    }

    navigate(route, params) {
        this.router.navigateToRoute(route, params);
    }

    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    dropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    configureRouter(config, router)
    {
        config.title = "Zeek Online";
        config.map([
            {route: ["", "home"], name: "home", moduleId: "./home", nav: true, title: "Home", settings: {auth: false}},
            {route: "login", name: "login", moduleId: "./login", nav: false, title: "Login", settings: {auth: false}},
            {route: "signup", name: "signup", moduleId: "./signup", nav: false, title: "Create Account", settings: {auth: false}},
            {route: "profile/:loginName?", name: "profile", moduleId: "./profile", nav: false, title: "Profile", settings: {auth: false}},
            {route: "editProfile", name: "editProfile", moduleId: "./edit-profile", nav: false, title: "Edit Profile", settings: {auth: true}}
        ]);

        config.addAuthorizeStep(new AuthPipelineStep());

        this.router = router;
    }
}
