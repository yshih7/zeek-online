import {maps} from "../services";
import Game from "../shared/Game";
import GameDriver from "../game-driver";

export class Play
{
    mapNotFound = false;
    game = null;
    driver = null;
    view;

    async activate({mapId}, routeConfig)
    {
        try
        {
            this.map = await maps.get(mapId);
            routeConfig.navModel.setTitle(`Play ${this.map.name}`);

            this.game = new Game(this.map.tileMap, this.map.width, this.map.height);
            this.driver = new GameDriver(this.game);
        }
        catch (err)
        {
            console.error(err);
            this.mapNotFound = true;
        }
    }

    attached()
    {
        this.driver.connect(this.view);
        this.view.focus();
        this.driver.start();
    }

    reset(ev)
    {
        ev.preventDefault();

        this.driver.reset();
        this.driver.start();
    }
}
