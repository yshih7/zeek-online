import * as mutations from "./mutations";

export default class Piece
{
    type;
    sprite;

    //Look up table for the tye of piece
    //Useful for converting map data into meaning piece name
    static typeList = Object.freeze({
        A : "Player",
        B : "Wall",
        C : "Goal",
        D : "Death Goal",
        E : "Sunflower",
        F : "Treasure Chest",
        G : "Death Sunflower",
        H : "Purple Tulip",
        I : "Apple",
        J : "Key",
        K : "Gate",
        L : "Crystal",
        M : "Dynamite",
        N : "Barrel",
        O : "Ball",
        X : "Empty"
    });

    //Lookup table to the URL of the sprite
    static spriteList = Object.freeze({
        //TODO need actual link
        //Enum for URL of the sprite
        "Player" : "",
        "Wall" : "",
        "Goal" : "",
        "Death Goal" : "",
        "Sunflower" : "",
        "Treasure Chest" : "",
        "Death Sunflower" : "",
        "Purple Tulip" : "",
        "Apple" : "",
        "Key" : "",
        "Gate" : "",
        "Crystal" : "",
        "Dynamite" : "",
        "Barrel" : "",
        "Ball" : ""
    });

    constructor(type){
    //Assign the type of piece and associate URL of sprite to it
    //TODO Can we reference it as name value pairs?
        this.type = Piece.typeList[type];
        this.sprite = Piece.spriteList[type];
    }

    //Piece update its status, for tulip?
    update(board, ownPos, dt){
        return [];
    }

    //If player collides into this piece, perform various check
    collide(board, playerPos, ownPos, dir){
        const mutation = [];
        if(this.type === "Wall"){
            return [];
        }else if(this.type === "Goal")
        {
            //Eat and win
            mutation.push(mutations.deletePiece(ownPos));
            mutation.push(mutations.win());
        }else if(this.type === "Death Goal")
        {
            //Eat and loose
            mutation.push(mutations.deletePiece(ownPos));
            mutation.push(mutations.deletePiece(playerPos));
        }else if(this.type === "Sunflower")
        {
            //eat and increment score, arbitrarily set to 10
            mutation.push(mutations.deletePiece(ownPos));
            mutation.push(mutations.incrementScore(10));
        }else if(this.type === "Treasure Chest")
        {
            //eat and increment score, arbitrarily set to 50
            mutation.push(mutations.deletePiece(ownPos));
            mutation.push(mutations.incrementScore(50));
        }else if(this.type === "Death Sunflower")
        {
            //eat and loose
            mutation.push(mutations.deletePiece(ownPos));
            mutation.push(mutations.deletePiece(playerPos));
        }else if(this.type === "Purple Tulip")
        {
            //If player can run into tulip, tulip must be closed. Do nothing
            return [];
        }else if(this.type === "Apple")
        {
            //TODO Try to push block against (Maybe write a special collide method?)

        }else if(this.type === "Key")
        {
            //Try to eat first. If player has key, do nothing. If not, add to inven and move
            if(board[playerPos[0]][playerPos[1]].inventory.has("Key") ){
                return [];
            }else{
                mutation.push(mutations.deletePiece(ownPos));
                mutation.push(mutations.addInventory("Key"));
            }
        }else if(this.type === "Gate")
        {
            //If has key, move in and replace block. Else, do nothing
            if(board[playerPos[0]][playerPos[1]].inventory.has("Key") ){
                mutation.push(mutations.deleteInventory("Key"));
                mutation.push(mutations.deletePiece(ownPos));
            }else{
                return [];
            }
        }

    //TODO need crystal, dynamite, barrels, balls

        return mutation;
    }
}
