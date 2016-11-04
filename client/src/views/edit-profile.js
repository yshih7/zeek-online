import app, {users} from "../services"

export class editProfile {

    error = ""
    info = ""

    loginName = ""
    displayName = ""
    email = ""
    nationality = ""
    hideEmail
    hideNationality

    activate() {
        const user = app.get("user");
        this.loginName = user.loginName;
        this.displayName = user.displayName;
        if (user.email) {
            this.email = user.email;
            this.hideEmail = false;
        } else {
            this.hideEmail = true;
        }
        if (user.nationality) {
            this.nationality = user.nationality;
            this.hideNationality = false;
        } else {
            this.hideNationality = true;
        }
    }

    async save() {
        try {
            var data = {"displayName":this.displayName};
            if(!this.hideEmail) {
                data.email = this.email;
            } else {
                data.email = null;
            }
            if (!this.hideNationality) {
                data.nationality = this.nationality;
            } else {
                data.nationality = null;
            }
            console.log(JSON.stringify(data));
            await users.patch(this.loginName, data);

            this.error = "";
            this.info = "Information saved!"
        } catch (err) {
            console.log(JSON.stringify(err));
            this.error = "Error saving profile information.";
            this.info = "";
        }
    }

}
