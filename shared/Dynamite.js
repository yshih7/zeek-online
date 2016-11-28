import Piece from "./piece";

export default class Dynamite extends Piece{
  type = "Dynamite";
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
