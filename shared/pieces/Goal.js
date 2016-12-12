import * as mutations from "./mutations";

export default class Goal{
    static pieceName = "Goal";
    static sprite = "Goal.png";
    static description = "A goal mushroom. Eat one of these to complete the level.";
    sprite = "Goal.png";

    constructor(){
    //Just putting it here
    }

    update(board, ownPos, dt){
    //Does nothing
        return [];
    }

    collide(board, playerPos, ownPos, dir){
        const mutation = [];
    //Delete, move piece, win
        mutation.push(mutations.deletePiece(ownPos));
        mutation.push(mutations.move(playerPos, ownPos));
        mutation.push(mutations.win());
        return mutation;
    }
}
