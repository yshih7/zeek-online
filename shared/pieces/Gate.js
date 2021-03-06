import * as mutations from "./mutations";

export default class Gate{
    static pieceName = "Gate";
    static sprite = "Door.png";
    static description = "A gate that can be opened with a key";
    sprite = "Door.png";

    constructor(){
    //Just putting it here
    }

    update(board, ownPos, dt){
    //Does nothing
        return [];
    }

    collide(board, playerPos, ownPos, dir){
        const mutation = [];
    //If has key, move in and replace block. Else, do nothing
        if(board[playerPos[0]][playerPos[1]].inventory.has("Key") ){
            mutation.push(mutations.deleteInventory("Key"));
            mutation.push(mutations.deletePiece(ownPos));
            mutation.push(mutations.move(playerPos, ownPos));
        }else{
            return [];
        }
        return mutation;
    }
}
