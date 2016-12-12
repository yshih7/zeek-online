import * as mutations from "./mutations";

export default class Explosion{
  time = 500;
  sprite = "Boom.png";

  constructor(){
    //Does nothing
  }

  update(board, ownPos, dt){
    let mutation = [];
    this.time -= dt;
    if(this.time <= 0){
      mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]]));
    }
    return mutation;
  }

  collide(board, playerPos, ownPos, dir){
    //Does nothing
    return [];
  }

}
