import path from "path";
import feathers from "feathers";
const serveStatic = feathers.static;
import favicon from "serve-favicon";
import compress from "compression";
import cors from "cors";
import configuration from "feathers-configuration";
import hooks from "feathers-hooks";
import rest from "feathers-rest";
import bodyParser from "body-parser";
import socketio from "feathers-socketio";
import middleware from "./middleware";
import services from "./services";

const app = feathers();

app.configure(configuration(path.join(__dirname, "..")));

app.use(compress())
    .options("*", cors())
    .use(cors())
    .use(favicon(path.join(app.get("public"), "favicon.ico")))
    .use("/", serveStatic(app.get("public")))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .configure(hooks())
    .configure(rest())
    .configure(socketio())
    .configure(services)
    .configure(middleware);

export default app;
