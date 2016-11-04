import app, {users} from "../services";
import {Redirect} from "aurelia-router";

export class profile {

    loginName = "Loading..."
    displayName = "Loading..."
    email = "Loading..."
    nationality = "Loading..."

    self = false;   //whether or not you are looking at your own profile

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


        if (user && this.loginName === user.loginName) {
            this.self = true;
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
        } else {
            this.self = false;
            try {
                const lookup = await users.get(this.loginName);

                this.displayName = lookup.displayName;

                if (lookup.email) {
                    this.email = user.email;
                } else {
                    this.email = "Not shown";
                }

                if (lookup.nationality) {
                    this.nationality = lookup.nationality;
                } else {
                    this.nationality = "Not shown";
                }

            } catch (err) {
                console.error(JSON.stringify(err));
                this.error = "That user does not exist";
            }
        }
    }

}
