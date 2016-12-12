import * as mutations from "./mutations";

export default class Goal{
  type = "Goal";
  sprite = "Goal.png";

  constructor(){
    //Just putting it here
  }

  update(board, ownPos, dt){
    //Does nothing
    return [];
  }

  collide(board, playerPos, ownPos, dir){
    let mutation = [];
    //Delete, move piece, win
    mutation.push(mutations.deletePiece(ownPos));
    mutation.push(mutations.move(playerPos, ownPos));
    mutation.push(mutations.win());
    return mutation;
  }
}
