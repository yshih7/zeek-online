import * as mutations from "./mutations";
import * as mechanics from "./mechanics";

export default class Ball{
    static pieceName = "Ball";
    static sprite = "Ball.png";
    static description = "A ball that can be pushed.";
    sprite = "Ball.png";

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
