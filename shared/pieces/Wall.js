export default class Wall{
  type = "Wall";
  sprite = "Wall1.png";

  constructor(){
    //Just putting it here
  }

  update(board, ownPos, dt){
    //Does nothing
  }

  collide(board, playerPos, ownPos, dir){
    return [];
  }
}
