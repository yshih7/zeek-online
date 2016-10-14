import r from "./rethink-connection";

//Make sure the database exists and start the server
r.dbList().contains("penultima")
    .do(dbExists => r.branch(dbExists, {created: 0}, r.dbCreate("penultima"))).run()
    .then(() =>
    {
        const app = require("./app").default;
        const port = app.get("port");
        const server = app.listen(port);

        server.on("listening", () =>
          console.log(`Feathers application started on ${app.get("host")}:${port}`)
        );
    });
