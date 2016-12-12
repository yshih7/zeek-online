import * as mutations from "./mutations";
import Player from "./Player";
import Apple from "./Apple";

export default class PurpleTulip{
  type = "PurpleTulip";
  static sprite = "Tulip_Open.png";
  sprite = "Tulip_Open.png";
  openState = true;
  digesting = false;
  timer = 10000;
  open;

  stateList = Object.freeze({
      digest_1 : "Tulip_Digesting_1.png",
      digest_2 : "Tulip_Digesting_2.png",
      digest_3 : "Tulip_Digesting_3.png",
      eat_east : "Tulip_Eating_East.png",
      eat_north : "Tulip_Eating_North.png",
      eat_south : "Tulip_Eating_South.png",
      eat_west : "Tulip_Eating_West.png",
      open : "Tulip_Open.png",
      rest : "Tulip_Rest.png"
  });

  constructor(open = true){
    this.open = open;
  }

  update(board, ownPos, dt){
    const mutation = [];
    //Check if tulip is eating things
    if(this.digesting){
      this.timer -= dt;
      if(this.timer > 6000 && this.timer <= 10000){
        this.sprite = this.stateList.digest_1;
      }else if(this.timer > 3000 && this.timer <= 6000){
        this.sprite = this.stateList.digest_2;
      }else if(this.timer > 0 && this.timer <= 3000){
        this.sprite = this.stateList.digest_3;
      }else if(this.timer <= 0){
        this.timer = 10;
        this.sprite = this.stateList.open;
        this.digesting = false;
      }
      //End changing digesting state
    }

    //Check if opened tulips adjacent to player or apple
    if(!this.digesting){
      if(ownPos[0] !== 0){
        if(board[ownPos[0]-1][ownPos[1]] instanceof Player ||
            board[ownPos[0]-1][ownPos[1]] instanceof Apple){
              mutation.push(mutations.deletePiece([ownPos[0]-1, ownPos[1]]));
              this.digesting = true;
              this.sprite = this.stateList.digest_1;
        }
      }
      if(ownPos[0] !== board.length){
        if(board[ownPos[0]+1][ownPos[1]] instanceof Player ||
            board[ownPos[0]+1][ownPos[1]] instanceof Apple){
              mutation.push(mutations.deletePiece([ownPos[0]+1, ownPos[1]]));
              this.digesting = true;
              this.sprite = this.stateList.digest_1;
        }
      }
      if(ownPos[1] !== 0){
        if(board[ownPos[0]][ownPos[1]-1] instanceof Player ||
            board[ownPos[0]][ownPos[1]-1] instanceof Apple){
              mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]-1]));
              this.digesting = true;
              this.sprite = this.stateList.digest_1;
        }
      }
      if(ownPos[1] !== board.width){
        if(board[ownPos[0]][ownPos[1]+1] instanceof Player ||
            board[ownPos[0]][ownPos[1]+1] instanceof Apple){
              mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]+1]));
              this.digesting = true;
              this.sprite = this.stateList.digest_1;
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
