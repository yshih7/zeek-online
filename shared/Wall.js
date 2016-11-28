import Piece from "./piece";

export default class Wall extends Piece{
  type = "Wall";
  //Need link
  sprite = "";

  constructor(){
    //Just putting it here
  }

  collide(board, playerPos, ownPos, dir){
    return [];
  }
}
