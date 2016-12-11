import * as mutations from "./mutations";

export default class Explosion{
  time = 0.5;
  sprite = "Boom.png";

  constructor(){
    //Does nothing
  }

  update(board, ownPos, dt){
    const mutation = [];
    time -= dt;
    if(time <= 0){
      mutation.push(mutations.deletePiece(ownPos[0], ownPos[1]));
    }
    return mutation;
  }

  collide(board, playerPos, ownPos, dir){
    //Does nothing
    return [];
  }

}
