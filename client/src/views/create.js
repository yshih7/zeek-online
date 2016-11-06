import {inject} from "aurelia-framework";
import {Router, Redirect} from "aurelia-router";
import app, {maps} from "../services";

@inject(Router)
export class Home
{
	name = "";
	map = [];
	tags = "";
	name = "";
	height;
	width;
	
	router;

	constructor(router)
	{
		this.router = router;
	}


	async create(){
		//create the map with the current configuration
		// .split(/\s+/g)	

		try
        {
            await maps.create({
                //id:p
				//creator
				//createdOn:DateTime
				name: this.name,
				tags: this.tags.split(/\s*,\s*/g),
				height: this.height,
				width: this.width,
				map: this.map.split(/\s+/g)
            });
        }
		catch (err)
        {
            console.error(JSON.stringify(err));
            return;
        }
	}
    
}
