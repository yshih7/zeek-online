import * as mutations from "./mutations";
import * as mechanics from "./mechanics";

export default class Ball{
  type = "Ball";
  sprite = "Ball.png";

  constructor(){
    //Just putting it here
  }

  update(board, ownPos, dt){
    //Does nothing
    return [];
  }

  collide(board, playerPos, ownPos, dir){
    //Calls the helper function from mechanics
    return mechanics.pushBlock(board, playerPos, ownPos, dir);
  }
}
