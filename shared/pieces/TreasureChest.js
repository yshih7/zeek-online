import * as mutations from "./mutations";

export default class TreasureChest{
    static pieceName = "Treasure Chest";
    static sprite = "Treasure.png";
    static description = "A treasure chest worth 1000 points!";
    sprite = "Treasure.png";

    constructor(){
    //Just putting it here
    }

    update(board, ownPos, dt){
    //Does nothing
        return [];
    }

    collide(board, playerPos, ownPos, dir){
        const mutation = [];
    //Eat piece and increment score
        mutation.push(mutations.deletePiece(ownPos));
        mutation.push(mutations.move(playerPos, ownPos));
        mutation.push(mutations.incrementScore(1000));
        return mutation;
    }
}
