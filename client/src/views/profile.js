import app, {users} from "../services";
import {Redirect} from "aurelia-router";

export class profile {

    loginName = "Loading..."
    displayName = "Loading..."
    email = "Loading..."
    nationality = "Loading..."

    canActivate({loginName}) {
        const user = app.get("user");
        if (!loginName) {
            if (user) return new Redirect("profile", user.loginName);
            else return new Redirect("home");
        }
    }

    async activate(params) {
        const user = app.get("user");
        if (params) {
            this.loginName = params.loginName;
        }
        /*
        if (user) {
            this.displayName = user.displayName;
            if (user.email) {
                this.email = user.email;
            } else {
                this.email = "Not shown";
            }
            if (user.nationality) {
                this.nationality = user.nationality;
            } else {
                this.nationality = "Not shown";
            }
        }
        */
        try {
            const lookup = await users.get(this.loginName);

            this.displayName = lookup.displayName;

            if (lookup.email) {
                this.email = user.email;
            } else {
                this.email = "Not shown"
            }

            
        } catch (err) {
            console.error(JSON.stringify(err));
        }
    }

}
