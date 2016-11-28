import Piece from "./piece";

export default class PurpleTulip extends Piece{
  type = "Purple Tulip";
  //Need link
  sprite = "";

  constructor(){
    //Just putting it here
  }

  collide(board, playerPos, ownPos, dir){
    //If player can run into it, tulip is closed
    return [];
  }
}
