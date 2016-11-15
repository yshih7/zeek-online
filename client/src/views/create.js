import {inject} from "aurelia-framework";
import {Router, Redirect} from "aurelia-router";
import app, {maps} from "../services";

const ERR_GENERIC = "Something went wrong. Please try again later.";

@inject(Router)
export class Create
{
	name = "";
	tileMap = [];
	tags = "";
	error = "";
	length;
	width;

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
				length: parseInt(this.length),
				width: parseInt(this.width),
				tileMap: this.tileMap.split(/\s+/g)
        });
    }
		catch (err)
    {
        console.error(JSON.stringify(err));
				this.error = err;
        return;
    }
	}

}
