import * as mutations from "./mutations";

export default class DeathGoal{
    static pieceName = "False Goal";
    static sprite = "DeathGoal.png";
    static description = "A false goal that will kill Zeek if eaten.";
    sprite = "DeathGoal.png";

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
