import * as mutations from "./mutations";
import * as mechanics from "./mechanics";
console.log(mechanics);

export default class Apple {
  type = "Apple";
  sprite = "Apple.png";

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
