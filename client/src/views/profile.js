import app from "../services";

export class profile {

    loginName = ""
    displayName = ""
    email = ""
    nationality = ""

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
