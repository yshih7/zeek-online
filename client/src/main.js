// we want font-awesome to load as soon as possible to show the fa-spinner
import "../styles/styles.css";
import "font-awesome/css/font-awesome.css";

// comment out if you don't want a Promise polyfill (remove also from webpack.common.js)
import * as Bluebird from "bluebird";
Bluebird.config({warnings: false});

import app from "./services";

export async function configure(aurelia)
{
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    try
    {
        //Check to see if the user is already logged in
        await app.authenticate();
    }
    catch (_) {
        //Ignore error thrown by not being logged in
    }

    await aurelia.start();
    aurelia.setRoot("views/app");
}
