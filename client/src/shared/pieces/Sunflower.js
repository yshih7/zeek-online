import * as mutations from "./mutations";

export default class Sunflower{
  type = "Sunflower";
  sprite = "Sunflower.png";

  constructor(){
    //Just putting it here
  }

  update(board, ownPos, dt){
    //Does nothing
  }

  collide(board, playerPos, ownPos, dir){
    const mutation = [];
    //Eat piece and increment score
    mutation.push(mutations.deletePiece(ownPos));
    mutation.push(mutations.move(playerPos, ownPos));
    mutation.push(mutations.incrementScore(10));
    return mutation;
  }
}
