import Piece from "./piece";

export default class Key extends Piece{
  type = "Key";
  //Need link
  sprite = "";

  constructor(){
    //Just putting it here
  }

  collide(board, playerPos, ownPos, dir){
    const mutation = [];
    //Try to eat first. If player has key, do nothing. If not, add to inven and move
    if(board[playerPos[0]][playerPos[1]].inventory.has("Key") ){
        return [];
    }else{
        mutation.push(mutations.deletePiece(ownPos));
        mutation.push(mutations.move(playerPos, ownPos));
        mutation.push(mutations.addInventory("Key"));
    }
    return mutation;
  }
}
