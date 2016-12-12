import {inject, observable} from "aurelia-framework";
import {Router} from "aurelia-router";
import {maps} from "../services";
import pieces from "../shared/pieces/Piece";

const ERR_GENERIC = "Something went wrong. Please try again";

@inject(Router)
export class Create
{
    name = "";
    tileMap = ["X", "X", "X", "X"];
    tags = "";
    error = "";
    @observable width = 2;
    @observable height = 2;
    tileType = "X";

    router;
    view;
    pieces = [
        {key: "X", type: {pieceName: "Empty"}}
    ];

    constructor(router)
	{
        this.router = router;

        //Sadly no support for aurelia-repeat strategies with Webpack, so doing this manually instead.
        for (const key in pieces) if (pieces.hasOwnProperty(key))
        {
            this.pieces.push({key, type: pieces[key]});
        }
    }

    attached()
    {
        this.view.render();
    }

    widthChanged(newWidth, oldWidth)
    {
        const newLength = newWidth * this.height;

        if (this.tileMap.length < newLength)
        {
            for (let i = oldWidth; i <= this.tileMap.length; i += newWidth)
            {
                this.tileMap.splice(i, 0, ...new Array(newWidth - oldWidth).fill("X"));
            }
        }

        if (this.tileMap.length > newLength)
        {
            for (let i = newWidth; i < this.tileMap.length; i += newWidth)
            {
                this.tileMap.splice(i, oldWidth - newWidth);
            }
        }

        setTimeout(() => this.view.render(), 0);
    }

    heightChanged(newHeight, oldHeight)
    {
        const newLength = this.width * newHeight;

        while (this.tileMap.length < newLength)
        {
            this.tileMap.push("X");
        }

        if (this.tileMap.length > newLength)
        {
            const deleteAmt = this.width * (oldHeight - newHeight);
            this.tileMap.splice(this.tileMap.length - deleteAmt, deleteAmt);
        }

        setTimeout(() => this.view.render(), 0);
    }

    handleClick({detail: {col, row}})
    {
        this.tileMap[this.width * row + col] = this.tileType;
        this.view.render();
    }

    async create()
    {
        this.error = "";

        if (this.tileMap.filter(tile => tile === "A").length !== 1)
        {
            this.error = "You must have exactly one player";
            return;
        }

        if (this.tileMap.indexOf("C") === -1)
        {
            this.error = "You must have at least one goal";
            return;
        }

        try
        {
            await maps.create({
                name: this.name,
                tags: this.tags.split(/\s*,\s*/g),
                width: this.width,
                height: this.height,
                tileMap: this.tileMap
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
