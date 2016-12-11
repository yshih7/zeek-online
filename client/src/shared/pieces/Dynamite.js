import * as mutations from "./mutations";

export default class Dynamite{
  type = "Dynamite";
  static sprite = "Dynamite_1.png";
  sprite = "Dynamite_1.png";
  active = false;
  time = 3;

  constructor(){
    //Just putting it here
  }

  static stateList = Object.freeze({
      state_1 : "Dynamite_1.png",
      state_2 : "Dynamite_2.png",
      state_3 : "Dynamite_3.png",
      boom: "Boom.png"
  });

  update(board, ownPos, dt){
    if(active){
      //If active, count down timer
      time -= dt;
      if(dt <= 0){
        //Explodes when timer reaches 0
        const mutation = [];
        if(ownPos[0] !== 0){
          if(board[ownPos[0]-1][ownPos[1]] !instanceof "Wall"){
                mutation.push(mutations.deletePiece([ownPos[0]-1, ownPos[1]]));
          }
        }
        if(ownPos[0] !== board.length){
          if(board[ownPos[0]+1][ownPos[1]] !instanceof "Wall"){
                mutation.push(mutations.deletePiece([ownPos[0]+1, ownPos[1]]));
          }
        }
        if(ownPos[1] !== 0){
          if(board[ownPos[0]][ownPos[1]-1] !instanceof "Wall"){
                mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]-1]));
          }
        }
        if(ownPos[1] !== board.width){
          if(board[ownPos[0]][ownPos[1]+1] !instanceof "Wall"){
                mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]+1]));
          }
        }
        mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]]));
        return mutation;
      }
    }
  }

  collide(board, playerPos, ownPos, dir){
    //Calls the helper function from mechanics
    //activates the timer on the bomb
    active = true;
    return mechanics.pushBlock(board, playerPos, ownPos, dir);
  }
}
