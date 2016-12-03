import * as mutations from "./mutations";

export default class Ball{
  type = "Ball";
  sprite = "Ball.png";

  constructor(){
    //Just putting it here
  }

  update(board, ownPos, dt){
    //Does nothing
  }

  collide(board, playerPos, ownPos, dir){
    //Calls the helper function from mechanics
    return mechanics.pushBlock(board, playerPos, ownPos, dir);
  }
}
