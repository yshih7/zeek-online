    import * as hooks from "./hooks";

import r from "../../rethink-connection";
import ensureTable from "../../ensure-table";
import rdbService from "feathers-rethinkdb";

export default async function()
{
    const app = this;

    await ensureTable(r, "users", "loginName");

    // Initialize our service with any options it requires
    app.use("/users", rdbService({
        Model: r,
        name: "users",
        id: "loginName"
    }));

    // Get our initialize service to that we can bind hooks
    const userService = app.service("/users");

    // Set up our before hooks
    userService.before(hooks.before);

    // Set up our after hooks
    userService.after(hooks.after);
}
