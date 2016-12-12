import * as mechanics from "./mechanics";

export default class Apple {
    static pieceName = "Apple";
    static sprite = "Apple.png";
    static description = "An apple that can be pushed around. Open tulips will eat it and stay full for a while.";
    sprite = "Apple.png";

    constructor(){
    //Just putting it here
    }

    update(board, ownPos, dt){
    //Does nothing
        return [];
    }

    collide(board, playerPos, ownPos, dir){
    //Calls the helper function from mechanics
        return mechanics.pushBlock(board, playerPos, ownPos, dir);
    }
}
