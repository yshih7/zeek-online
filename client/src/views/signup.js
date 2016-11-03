import {inject} from "aurelia-framework";
import {Router, Redirect} from "aurelia-router";
import app, {users} from "../services";

const ERR_BAD_loginName = "That's not a valid loginName address. Try again.";
const ERR_PASSWORD_MISMATCH = "Your passwords don't match. Try again.";
const ERR_EMPTY_FIELDS = "Please fill out all fields";
const ERR_GENERIC = "Something went wrong. Please try again later.";

@inject(Router)
export class Signup
{
    loginName = "";
    password = "";
    passwordConfirm = "";
    displayName = "";

    error = "";

    router;

    constructor(router)
    {
        this.router = router;
    }

    canActivate()
    {
        if (app.get("user")) return new Redirect("home");
    }

    async send()
    {
        if (!this.loginName || !this.password || !this.passwordConfirm || !this.displayName)
        {
            this.error = ERR_EMPTY_FIELDS;
            return;
        }

        if (this.password !== this.passwordConfirm)
        {
            this.error = ERR_PASSWORD_MISMATCH;
            return;
        }

        try
        {
            await users.create({
                loginName: this.loginName,
                password: this.password,
                displayName: this.displayName
            });
        }
        catch (err)
        {
            console.error(JSON.stringify(err));
            if (err.name === "Conflict")
            {
                this.error = ERR_loginName_TAKEN;
            }
            else
            {
                this.error = ERR_GENERIC;
            }
            return;
        }

        this.router.navigateToRoute("login", {signupSuccess: true});
    }
}
