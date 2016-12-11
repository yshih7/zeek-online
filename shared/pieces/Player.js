import * as mutations from "./mutations";

export default class Player{
    inventory = new Set();
    type = "Player";
    static sprite = "Player_South_1.png";
    sprite = "Player_South_1.png";

    constructor(){
    }

    static stateList = Object.freeze({
        up : "Player_North_1.png",
        down : "Player_South_1.png",
        left : "Player_West_1.png",
        right : "Player_East_1.png"
    });

    update(board, ownPos, dt){
      //Does nothing, the sprite update happens at move()
      return [];
    }

    //Function that attemptes to move the player piece
    //May collide into other piece
    move(board, ownPos, dir){
        const mutation = [];
        let newPos;
        //First check if the direction moving is empty
        if(dir === "UP"){
          sprite = stateList.up;
            //Check if it is edge piece to prevent out of bound error
            if(ownPos[0] === 0){
                return [];
            }
            //Check if space moving into is empty
            //Else, call collide() onto that object
            //Add to mutation list
            if(board[ownPos[0]-1][ownPos[1]] === null){
                mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0]-1, ownPos[1]]));
                newPos = [ownPos[0]-1, ownPos[1]];
            }else{
                //Get the mutation from calling collide
                //If it is not null, add to the list of mutation
                //AND if it is moved, set new position for use in checking tullip
                const muta = board[ownPos[0]-1][ownPos[1]].collide(board, [ownPos[0], ownPos[1]],
                                                                   [ownPos[0]-1, ownPos[1]], dir);
                if(muta){
                    mutation.push(muta);
                    if(muta.type === "MOVE"){
                        mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0]-1, ownPos[1]]));
                    }
                }
            }
        }else if(dir === "DOWN"){
          sprite = stateList.down;
            if(ownPos[0] === board.length){
                return [];
            }
            if(board[ownPos[0]+1][ownPos[1]] === null){
                mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0]+1, ownPos[1]]));
                newPos = [ownPos[0]+1, ownPos[1]];
            }else{
                const muta = board[ownPos[0]+1][ownPos[1]].collide(board, [ownPos[0], ownPos[1]],
                                                                   [ownPos[0]+1, ownPos[1]], dir);
                if(muta){
                    mutation.push(muta);
                    if(muta.type === "MOVE"){
                        mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0]-1, ownPos[1]]));
                    }
                }
            }
        }else if(dir === "LEFT"){
          sprite = stateList.left;
            if(ownPos[1] === 0){
                return [];
            }
            if(board[ownPos[0]][ownPos[1]-1] === null){
                mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0], ownPos[1]-1]));
                newPos = [ownPos[0], ownPos[1]-1];
            }else{
                const muta = board[ownPos[0]][ownPos[1]-1].collide(board, [ownPos[0], ownPos[1]],
                                                                   [ownPos[0], ownPos[1]-1], dir);
                if(muta){
                    mutation.push(muta);
                    if(muta.type === "MOVE"){
                        mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0]-1, ownPos[1]]));
                    }
                }
            }
        }else if(dir === "RIGHT"){
          sprite = stateList.right;
            if(ownPos[1] === board.width){
                return [];
            }
            if(board[ownPos[0]][ownPos[1]+1] === null){
                mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0], ownPos[1]+1]));
                newPos = [ownPos[0], ownPos[1]+1];
            }else{
                const muta = board[ownPos[0]][ownPos[1]+1].collide(board, [ownPos[0], ownPos[1]],
                                                                   [ownPos[0], ownPos[1]+1], dir);
                if(muta){
                    mutation.push(muta);
                    if(muta.type === "MOVE"){
                        mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0]-1, ownPos[1]]));
                    }
                }
            }
        }//End direction check
        return mutation;
    }
}
