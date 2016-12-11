import * as mutations from "./mutations";

export default class DeathGoal{
  type = "DeathGoal";
  sprite = "DeathGoal.png";

  constructor(){
    //Just putting it here
  }

  update(board, ownPos, dt){
    //Does nothing
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