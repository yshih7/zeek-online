import * as mutations from "./mutations";
import * as mechanics from "./mechanics";

export default class Crystal{
    static pieceName = "Crystal";
    static sprite = "Crystal_1.png";
    static description = "A crystal that can be destroyed by pushing it next to another one.";
    sprite = "Crystal_1.png";
    timer = 2000;
    active = false;

    constructor(){
    //Just putting it here
    }

    stateList = Object.freeze({
        state_1 : "Crystal_1.png",
        state_2 : "Crystal_2.png"
    });

    update(board, ownPos, dt){

        if(this.active){
          this.timer -= dt;
        }

        //If there is a crystal adjacent to it, delete both
        const mutation = [];
        if(ownPos[0] !== 0){
            if(board[ownPos[0]-1][ownPos[1]] instanceof Crystal){
              if(!this.active){
                board[ownPos[0]][ownPos[1]].activate();
              }else if (this.active && this.timer <= 0){
                mutation.push(mutations.deletePiece([ownPos[0]-1, ownPos[1]]));
                mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]]));
                return mutation;
              }
            }
        }
        if(ownPos[0] !== board.length){
            if(board[ownPos[0]+1][ownPos[1]] instanceof Crystal){
              if(!this.active){
                board[ownPos[0]][ownPos[1]].activate();
              }else if (this.active && this.timer <= 0){
                mutation.push(mutations.deletePiece([ownPos[0]+1, ownPos[1]]));
                mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]]));
                return mutation;
              }
            }
        }
        if(ownPos[1] !== 0){
            if(board[ownPos[0]][ownPos[1]-1] instanceof Crystal){
              if(!this.active){
                board[ownPos[0]][ownPos[1]].activate();
              }else if (this.active && this.timer <= 0){
                mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]-1]));
                mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]]));
                return mutation;
              }
            }
        }
        if(ownPos[1] !== board.width){
            if(board[ownPos[0]][ownPos[1]+1] instanceof Crystal){
              if(!this.active){
                board[ownPos[0]][ownPos[1]].activate();
              }else if (this.active && this.timer <= 0){
                mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]+1]));
                mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]]));
                return mutation;
              }
            }
        }
        return mutation;
    }

    activate(){
      this.active = true;
      this.sprite = this.stateList.state_2;
    }

    collide(board, playerPos, ownPos, dir){
      //Calls the helper function from mechanics
      if(this.active){
        return [];
      }else{
        return mechanics.pushBlock(board, playerPos, ownPos, dir);
      }

    }
}
