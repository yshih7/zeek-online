import * as mutations from "./mutations";

export default class DeathSunflower{
    static pieceName = "Poison Sunflower";
    static sprite = "DeathSunflower.png";
    static description = "A poison sunflower that kills Zeek if he collects it."
    sprite = "DeathSunflower.png";

    constructor(){
    //Just putting it here
    }

    update(board, ownPos, dt){
    //Does nothing
        return [];
    }

    collide(board, playerPos, ownPos, dir){
        const mutation = [];
    //Delete, move piece, loose
        mutation.push(mutations.deletePiece(ownPos));
        mutation.push(mutations.move(playerPos, ownPos));
        mutation.push(mutations.deletePiece(ownPos));
        return mutation;
    }
}
