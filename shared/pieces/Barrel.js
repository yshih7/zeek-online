export default class Barrel{
    static pieceName = "Barrel";
    static sprite = "Barrel.png";
    static description = "A barrel that can't be moved but can be blown up.";
    sprite = "Barrel.png";

    constructor(){
    //Just putting it here
    }

    update(board, ownPos, dt){
    //Does nothing
        return [];
    }

    collide(board, playerPos, ownPos, dir){
    //Does nothing since barrel is immovable
        return [];
    }
}
