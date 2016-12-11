import {inject} from "aurelia-framework";
import {Router, Redirect} from "aurelia-router";
import app, {maps} from "../services";

const ERR_GENERIC = "Something went wrong. Please try again";

@inject(Router)
export class Create
{
    name = "";
    tileMap = [];
    tags = "";
    error = "";
    width;
    height;

    router;

    constructor(router)
	   {
        this.router = router;
    }


    async create(){
		//create the map with the current configuration
		//.split(/\s+/g)
		//date = new Date();
        try
        {
            await maps.create({
                name: this.name,
                tags: this.tags.split(/\s*,\s*/g),
                width: parseInt(this.width),
                height: parseInt(this.height),
                tileMap: this.tileMap.split(/\s+/g)
            });
        }
        catch (err)
        {
            console.error(ERR_GENERIC);
            this.error = err;
            return;
        }
        //Success
        this.router.navigateToRoute("home");
    }

}
