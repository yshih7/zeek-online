import Piece from "./piece";

export default class Barrel extends Piece{
  type = "Barrel";
  //Need link
  sprite = "";

  constructor(){
    //Just putting it here
  }

  collide(board, playerPos, ownPos, dir){
    const mutation = [];
    //TODO

    return mutation;
  }
}
