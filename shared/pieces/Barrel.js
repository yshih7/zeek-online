export default class Barrel{
  type = "Barrel";
  //Need link
  sprite = "Barrel.png";

  constructor(){
    //Just putting it here
  }

  collide(board, playerPos, ownPos, dir){
    //Does nothing since barrel is immovable
    return [];
  }
}
