import {inject} from "aurelia-framework";
import {Router, Redirect} from "aurelia-router";
import app from "../services";

@inject(Router)
export class Home
{
	map = [];
	tag = "";
	name = "";
	
	router;

	constructor(router)
	{
		this.router = router;
  }


	async create(){
		//create the map with the current configuration
		// .split(/\s+/g)	
	}
    
}
