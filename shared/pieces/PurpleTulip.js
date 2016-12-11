import * as mutations from "./mutations";
import Player from "./Player";
import Apple from "./Apple";

export default class PurpleTulip{
  type = "PurpleTulip";
  static sprite = "Tulip_Open.png";
  sprite = "Tulip_Open.png";
  openState = true;
  digesting = false;
  timer = 10;

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
  }

  update(board, ownPos, dt){
    const mutation = [];
    //Check if tulip is eating things
    if(digesting){
      timer -= dt;
      if(timer > 6 && timer <= 10){
        sprite = stateList.digest_1;
      }else if(timer > 3 && timer <= 6){
        sprite = stateList.digest_2;
      }else if(timer > 0 && timer <= 3){
        sprite = stateList.digest_3;
      }else if(timer <= 0){
        timer = 10;
        sprite = stateList.open;
        digesting = false;
      }
      //End changing digesting state
    }

    //Check if opened tulips adjacent to player or apple
    if(!digesting){
      if(ownPos[0] !== 0){
        if(board[ownPos[0]-1][ownPos[1]] instanceof Player ||
            board[ownPos[0]-1][ownPos[1]] instanceof Apple){
              mutation.push(mutations.deletePiece([ownPos[0]-1, ownPos[1]]));
              digesting = true;
        }
      }
      if(ownPos[0] !== board.length){
        if(board[ownPos[0]+1][ownPos[1]] instanceof Player ||
            board[ownPos[0]+1][ownPos[1]] instanceof Apple){
              mutation.push(mutations.deletePiece([ownPos[0]+1, ownPos[1]]));
              digesting = true;
        }
      }
      if(ownPos[1] !== 0){
        if(board[ownPos[0]][ownPos[1]-1] instanceof Player ||
            board[ownPos[0]][ownPos[1]-1] instanceof Apple){
              mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]-1]));
              digesting = true;
        }
      }
      if(ownPos[1] !== board.width){
        if(board[ownPos[0]][ownPos[1]+1] instanceof Player ||
            board[ownPos[0]][ownPos[1]+1] instanceof Apple){
              mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]+1]));
              digesting = true;
        }
      }
    }
    return mutation;
  }

  collide(board, playerPos, ownPos, dir){
    //If player can collide into it, tulip is closed
    //Nothing should be able to move it
    return [];
  }
}
