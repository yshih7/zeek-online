import {bindable} from "aurelia-framework";
import ImagePreloader from "image-preloader";

import pieces from "../../shared/pieces/Piece";

const TILE_WIDTH = 36;
const TILE_HEIGHT = 36;

//Need the list of filenames for preloading
const sprites = Object.freeze([
    "Apple.png",
    "Ball.png",
    "Barrel.png",
    "Boom.png",
    "Crystal_1.png",
    "Crystal_2.png",
    "DeathGoal.png",
    "DeathSunflower.png",
    "Door.png",
    "Dynamite_1.png",
    "Dynamite_2.png",
    "Dynamite_3.png",
    "Goal.png",
    "Key.png",
    "Player_East_1.png",
    "Player_North_1.png",
    "Player_South_1.png",
    "Player_West_1.png",
    "Sunflower.png",
    "Treasure.png",
    "Tulip_Digesting_1.png",
    "Tulip_Digesting_2.png",
    "Tulip_Digesting_3.png",
    "Tulip_Eating_East.png",
    "Tulip_Eating_North.png",
    "Tulip_Eating_South.png",
    "Tulip_Eating_West.png",
    "Tulip_Open.png",
    "Tulip_Resting.png",
    "Wall1.png",
    "Wall2.png",
    "Wall3.png"
]);

export class GameViewCustomElement
{
    @bindable board = [];
    @bindable width = 0;
    @bindable height = 0;
    canvas;

    canvasWidth = 0;
    canvasHeight = 0;
    loading = true;
    error = false;

    async attached()
    {
        const preloader = new ImagePreloader();
        const imageResults = await preloader.preload(...sprites.map(filename => `sprites/${filename}`));
        if (imageResults.some(image => !image.status))
        {
            this.error = true;
        }
        this.loading = false;
    }

    widthChanged(width)
    {
        this.canvasWidth = width * TILE_WIDTH;
    }

    heightChanged(height)
    {
        this.canvasHeight = height * TILE_HEIGHT;
    }

    render()
    {
        if (this.loading || this.error) return;

        const ctx = this.canvas.getContext("2d");

        //Clear the canvas
        this.canvas.width = this.canvas.width;

        for (let v = 0; v < this.height; v++)
        {
            for (let h = 0; h < this.width; h++)
            {
                let piece;
                if (Array.isArray(this.board[v]))
                {
                    piece = this.board[v][h];
                }
                else
                {
                    piece = pieces[this.board[v * this.width + h]];
                }

                if (!piece) continue;

                const sprite = new Image();
                sprite.src = `sprites/${piece.sprite}`;

                ctx.drawImage(sprite, h * TILE_WIDTH, v * TILE_HEIGHT);
            }
        }
    }
}
