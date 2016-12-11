import app, {users, maps} from "../services";
import {Redirect} from "aurelia-router";

export class profile {

    loginName = "Loading..."
    displayName = "Loading..."
    email = "Loading..."
    nationality = "Loading..."
    maps = [];

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
        } else {
            this.self = false;
        }
        try {
            const lookup = await users.get(this.loginName);

            try {
                this.maps = await maps.find({query: {"creator": this.loginName, "$sort" :{"createdAt":"-1"}}});

                if (this.maps) {
                    for (var i = 0, len = this.maps.length; i < len; i++) {
                        console.log(JSON.stringify(this.maps[i]));
                    }
                }
            } catch (err) {
                console.log(JSON.stringify(err));
            }

            this.displayName = lookup.displayName;

            if (lookup.email) {
                this.email = lookup.email;
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
