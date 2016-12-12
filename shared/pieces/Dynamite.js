import * as mutations from "./mutations";
import * as mechanics from "./mechanics";
import Wall from "./Wall";
import Explosion from "./Explosion";

export default class Dynamite{
    static pieceName = "Dynamite";
    static sprite = "Dynamite_1.png";
    static description = "A pack of dynamite that will explode a few seconds after it's pushed. It can destroy anything other than a wall.";
    sprite = "Dynamite_1.png";
    active = false;
    time = 3000;

    constructor(){
    //Just putting it here
    }

    stateList = Object.freeze({
        state_1 : "Dynamite_1.png",
        state_2 : "Dynamite_2.png",
        state_3 : "Dynamite_3.png"
    });

    update(board, ownPos, dt){
        if(this.active){

      //Alternate sprite
      // if(this.sprite === this.stateList.state_2){
      //   this.sprite = this.stateList.state_3;
      // }else{
      //   this.sprite = this.stateList.state_2;
      // }

      //If active, count down timer
            this.time -= dt;
            if(this.time <= 0){
                console.log("blowing up");
        //Explodes when timer reaches 0
                const mutation = [];
                if(ownPos[0] !== 0){
                    if(!(board[ownPos[0]-1][ownPos[1]] instanceof Wall)){
                        console.log("up");
                        mutation.push(mutations.change([ownPos[0]-1, ownPos[1]], Explosion));
                    }
                }
                if(ownPos[0] !== board.length-1){
                    if(!(board[ownPos[0]+1][ownPos[1]] instanceof Wall)){
                        console.log("down");
                        mutation.push(mutations.change([ownPos[0]+1, ownPos[1]], Explosion));
                    }
                }
                if(ownPos[1] !== 0){
                    if(!(board[ownPos[0]][ownPos[1]-1] instanceof Wall)){
                        console.log("left");
                        mutation.push(mutations.change([ownPos[0], ownPos[1]-1], Explosion));
                    }
                }
                if(ownPos[1] !== board.width-1){
                    if(!(board[ownPos[0]][ownPos[1]+1] instanceof Wall)){
                        console.log("right");
                        mutation.push(mutations.change([ownPos[0], ownPos[1]+1], Explosion));
                    }
                }
                mutation.push(mutations.change([ownPos[0], ownPos[1]], Explosion));
                return mutation;
            }
        }
        return [];
    }

    collide(board, playerPos, ownPos, dir){
    //Calls the helper function from mechanics
    //activates the timer on the bomb
        this.active = true;
        this.sprite = this.stateList.state_2;
        return mechanics.pushBlock(board, playerPos, ownPos, dir);
    }
}
