import app from "../services";
import {Redirect} from "aurelia-router";

export class profile {

    loginName = ""
    displayName = ""
    email = ""
    nationality = ""

    canActivate({loginName}) {
        const user = app.get("user");
        if (!loginName) {
            if (user) return new Redirect("profile", user.loginName);
            else return new Redirect("home");
        }
    }

    activate(params) {
        const user = app.get("user");
        if (params) {
            this.loginName = params.loginName;
        }
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
    }

}
