import app from "../services";

export class profile {

    displayName = ""
    email = ""
    nationality = ""

    activate() {
        const user = app.get("user");
        if (user) {
            this.displayName = user.displayName;
            this.email = user.email;
            if (user.nationality) {
                this.nationality = user.nationality;
            } else {
                this.nationality = "Not shown";
            }
        }
    }

}
