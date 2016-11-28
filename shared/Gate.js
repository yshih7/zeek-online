import Piece from "./piece";

export default class Gate extends Piece{
  type = "Gate";
  //Need link
  sprite = "";

  constructor(){
    //Just putting it here
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
