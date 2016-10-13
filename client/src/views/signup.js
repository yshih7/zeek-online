import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {validate as validateEmail} from "email-validator";
import {users} from "../services";

const ERR_BAD_EMAIL = "That's not a valid email address. Try again.";
const ERR_PASSWORD_MISMATCH = "Your passwords don't match. Try again.";
const ERR_EMAIL_TAKEN = "That email's already in use. Try again.";
const ERR_EMPTY_FIELDS = "Please fill out all fields";
const ERR_GENERIC = "Something went wrong. Please try again later.";

@inject(Router)
export class Signup
{
    email = "";
    password = "";
    passwordConfirm = "";
    displayName = "";

    error = "";

    router;

    constructor(router)
    {
        this.router = router;
    }

    async send()
    {
        if (!this.email || !this.password || !this.passwordConfirm || !this.displayName)
        {
            this.error = ERR_EMPTY_FIELDS;
            return;
        }

        if (!validateEmail(this.email))
        {
            this.error = ERR_BAD_EMAIL;
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
                email: this.email,
                password: this.password,
                displayName: this.displayName
            });
        }
        catch (err)
        {
            console.error(JSON.stringify(err));
            if (err.name === "Conflict")
            {
                this.error = ERR_EMAIL_TAKEN;
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
