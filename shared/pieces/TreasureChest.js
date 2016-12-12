import * as mutations from "./mutations";

export default class TreasureChest{
  type = "TreasureChest";
  sprite = "Treasure.png";

  constructor(){
    //Just putting it here
  }

  update(board, ownPos, dt){
    //Does nothing
    return [];
  }

  collide(board, playerPos, ownPos, dir){
    let mutation = [];
    //Eat piece and increment score
    mutation.push(mutations.deletePiece(ownPos));
    mutation.push(mutations.move(playerPos, ownPos));
    mutation.push(mutations.incrementScore(1000));
    return mutation;
  }
}
