export default class Wall{
    static pieceName = "Wall";
    static sprite = "Wall1.png";
    static description = "An impenetrable wall.";
    sprite = "Wall1.png";

    constructor(){
    //Just putting it here
    }

    update(board, ownPos, dt){
    //Does nothing
        return [];
    }

    collide(board, playerPos, ownPos, dir){
        return [];
    }
}
