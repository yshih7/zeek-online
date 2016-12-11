import {inject, observable} from "aurelia-framework";
import {Router} from "aurelia-router";
import app, {users, maps} from "../services";

@inject(Router)
export class Search {

    @observable mode = "users"
    router;
    results = [];

    constructor(router) {
        this.router = router;
    }

    modeChanged() {
        results = [];
    }

    async search(lookup) {
        if(this.mode === "users") {
            //search on the users endpoint
            this.results = await users.find({query: {"displayName": lookup}});
        } else if (this.mode === "maps") {
            //search on the maps endpoint
            if (lookup === "") lookup = undefined;
            this.results = await maps.find({query: {"name": lookup, "$sort" :{"createdAt":"-1"}}});
        }

        if (this.results) {
            for (var i = 0, len = this.results.length; i < len; i++) {
                console.log(JSON.stringify(this.results[i]));
            }
        }
    }

}