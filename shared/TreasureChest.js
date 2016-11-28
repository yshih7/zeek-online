import Piece from "./piece";

export default class TreasureChest extends Piece{
  type = "Treasure Chest";
  //Need link
  sprite = "";

  constructor(){
    //Just putting it here
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
