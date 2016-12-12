import * as mutations from "./mutations";

export default class DeathSunflower{
  type = "DeathSunflower";
  sprite = "DeathSunflower.png";

  constructor(){
    //Just putting it here
  }

  update(board, ownPos, dt){
    //Does nothing
    return [];
  }

  collide(board, playerPos, ownPos, dir){
    let mutation = [];
    //Delete, move piece, loose
    mutation.push(mutations.deletePiece(ownPos));
    mutation.push(mutations.move(playerPos, ownPos));
    mutation.push(mutations.deletePiece(ownPos));
    return mutation;
  }
}
