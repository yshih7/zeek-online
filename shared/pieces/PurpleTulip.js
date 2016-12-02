import Piece from "./piece";

export default class PurpleTulip extends Piece{
  type = "Purple Tulip";
  //Need link
  sprite = "";
  openState = true;

  static stateList = Object.freeze({
      open : "Tulip_Open.png",
      rest : "Tulip_Rest.png"
  });


  constructor(){
    //Just putting it here
    sprite = stateList.open;
  }

  eat(){
    sprite = stateList.rest;
    openState = false;
  }

  open(){
    sprite = stateList.open;
    openState = true;
  }

  collide(board, playerPos, ownPos, dir){
    //If player can run into it, tulip is closed
    return [];
  }
}
