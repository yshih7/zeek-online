export default class Barrel{
  type = "Barrel";
  sprite = "Barrel.png";

  constructor(){
    //Just putting it here
  }

  update(board, ownPos, dt){
    //Does nothing
    return [];
  }

  collide(board, playerPos, ownPos, dir){
    //Does nothing since barrel is immovable
    return [];
  }
}
