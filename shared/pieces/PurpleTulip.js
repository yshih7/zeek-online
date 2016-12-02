import Piece from "./piece";

export default class PurpleTulip extends Piece{
  type = "Purple Tulip";
  //Need link
  sprite = "";
  openState = true;

  static stateList = Object.freeze({
      digest_1 : "Tulip_Digest_1.png",
      digest_2 : "Tulip_Digest_2.png",
      digest_3 : "Tulip_Digest_3.png",
      eat_east : "Tulip_Eating_East.png",
      eat_north : "Tulip_Eating_North.png",
      eat_south : "Tulip_Eating_South.png",
      eat_west : "Tulip_Eating_West.png",
      open : "Tulip_Open.png",
      rest : "Tulip_Rest.png"
  });

  constructor(){
    //Just putting it here
    sprite = stateList.open;
  }

  //Two helper function, you may or may not need them
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
