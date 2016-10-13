import app from "../services";

export class Home
{
    loggedIn = false;
    displayName = "";

    activate()
    {
        const user = app.get("user");
        if (user)
        {
            this.loggedIn = true;
            this.displayName = user.displayName;
        }
    }

    logout()
    {
        app.logout();
        this.loggedIn = false;
    }
}
