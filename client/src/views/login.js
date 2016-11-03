import {inject} from "aurelia-framework";
import {Router, Redirect} from "aurelia-router";
import app from "../services";

const ERR_BAD_LOGIN = "Username or password invalid";
const ERR_INTERNAL = "Something went wrong and we had to log you out. Please log in again.";
const INFO_SIGNUP_SUCCESS = "Your account has been created! You may now log in.";

@inject(Router)
export class Login
{
    email = "";
    password = "";

    error = "";
    info = "";

    router;

    constructor(router)
    {
        this.router = router;
    }

    canActivate()
    {
        if (app.get("user")) return new Redirect("home");
    }

    activate(params)
    {
        if (params.internalError)
        {
            this.error = ERR_INTERNAL;
        }
        else if (params.signupSuccess)
        {
            this.info = INFO_SIGNUP_SUCCESS;
        }
    }

    async send()
    {
        try
        {
            await app.authenticate({
                type: "local",
                loginName: this.loginName,
                password: this.password
            });
        }
        catch (err)
        {
            console.error(JSON.stringify(err));
            this.info = "";
            this.error = ERR_BAD_LOGIN;
            return;
        }

        this.router.navigateToRoute("home");
    }
}
