import * as mutations from "./mutations";

export default class Key{
  type = "Key";
  sprite = "Key.png";

  constructor(){
    //Just putting it here
  }

  update(board, ownPos, dt){
    //Does nothing
    return [];
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
