import Piece from "./piece";

export default class Apple extends Piece{
  type = "Apple";
  //Need link
  sprite = "";

  constructor(){
    //Just putting it here
  }

  collide(board, playerPos, ownPos, dir){
    const mutation = [];

    return mutation;
  }
}
