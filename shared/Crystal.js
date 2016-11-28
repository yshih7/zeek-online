import Piece from "./piece";

export default class Crystal extends Piece{
  type = "Crystal";
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
