import Piece from "./piece";
import * as mutations from "./mutations";

export default class TreasureChest extends Piece{
  type = "Treasure Chest";
  sprite = "Treasure.png";

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
    mutation.push(mutations.incrementScore(50));
    return mutation;
  }
}
