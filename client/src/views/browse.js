import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import app, {users, maps} from "../services";

@inject(Router)
export class Search {

    mode = "users"
    router;
    results = [];

    constructor(router) {
        this.router = router;
    }

    async search(lookup) {
        if(this.mode === "users") {
            //search on the users endpoint
            this.results = await users.find({query: {"displayName": lookup}});

            for (var i = 0, len = this.results.length; i < len; i++) {
                console.log(JSON.stringify(this.results[i]));
            }
        } else if (this.mode === "maps") {
            //search on the maps endpoint
            const results = await users.find({name: lookup});
        }
    }

}
