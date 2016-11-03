import authentication from "feathers-authentication";


export default function()
{
    const app = this;

    const config = app.get("auth");
    config.local = {'usernameField':'loginName'};
    console.log(JSON.stringify(config));

    app.configure(authentication(config));
}
