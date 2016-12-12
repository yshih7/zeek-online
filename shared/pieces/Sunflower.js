import * as mutations from "./mutations";

export default class Sunflower{
    static pieceName = "Sunflower";
    static sprite = "Sunflower.png";
    static description = "A sunflower that Zeek can pick to gain 50 points.";
    sprite = "Sunflower.png";

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
        mutation.push(mutations.incrementScore(50));
        return mutation;
    }
}
