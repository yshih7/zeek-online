import Piece from "./piece";

export default class Ball extends Piece{
  type = "Ball";
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
