import Piece from "./piece";

export default class Goal extends Piece{
  type = "Goal";
  //Need link
  sprite = "";

  constructor(){
    //Just putting it here
  }

  collide(board, playerPos, ownPos, dir){
    const mutation = [];
    //Delete, move piece, win
    mutation.push(mutations.deletePiece(ownPos));
    mutation.push(mutations.move(playerPos, ownPos));
    mutation.push(mutations.win());
    return mutation;
  }
}
