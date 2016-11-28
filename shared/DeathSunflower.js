import Piece from "./piece";

export default class DeathSunflower extends Piece{
  type = "Death Sunflower";
  //Need link
  sprite = "";

  constructor(){
    //Just putting it here
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
