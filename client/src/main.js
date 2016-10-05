// we want font-awesome to load as soon as possible to show the fa-spinner
import "../styles/styles.css";
import "font-awesome/css/font-awesome.css";

// comment out if you don't want a Promise polyfill (remove also from webpack.common.js)
import * as Bluebird from "bluebird";
Bluebird.config({warnings: false});

export async function configure(aurelia)
{
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    await aurelia.start();
    aurelia.setRoot("views/app");
}
