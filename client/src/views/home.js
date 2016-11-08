import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import app from "../services";

@inject(Router)
export class Home
{
    loggedIn = false;
    displayName = "";
    loginName = "";

    router;

    constructor(router) {
        this.router = router;
    }

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

    search(lookup) {
        this.router.navigateToRoute('profile', {loginName: lookup})
    }
}
