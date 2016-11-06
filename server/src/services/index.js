import authentication from "./authentication";
import user from "./user";
import maps from "./maps";

export default function()
{
    const app = this;


    app.configure(authentication);
    app.configure(user);
    app.configure(maps);
}
