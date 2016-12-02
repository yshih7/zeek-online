import * as mutations from "./mutations";

export default class Player{
    inventory = new Set();
    type = "Player";
    sprite = "";

    constructor(){
      sprite = stateList.down;
    }

    static stateList = Object.freeze({
        up : "Player_North_1.png",
        down : "Player_South_1.png",
        left : "Player_West_1.png",
        right : "Player_East_1.png"
    });

    //Function that attemptes to move the player piece
    //May collide into other piece
    move(board, ownPos, dir){
        const mutation = [];
        let newPos;
        //First check if the direction moving is empty
        if(dir === "up"){
          sprite = stateList.up;
            //Check if it is edge piece to prevent out of bound error
            if(ownPos[0] === 0){
                return [];
            }
            //Check if space moving into is empty
            //If not, call collide() onto that object
            //Add to mutation list
            if(board[ownPos[0]-1][ownPos[1]] === "X"){
                mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0]-1, ownPos[1]]));
                newPos = [ownPos[0]-1, ownPos[1]];
            }else{
                //Get the mutation from calling collide
                //If it is not null, add to the list of mutation
                //AND if it is moved, set new position for use in checking tullip
                const muta = board[ownPos[0]-1, ownPos[1]].collide(board, [ownPos[0], ownPos[1]],
                                                                   [ownPos[0]-1, ownPos[1]], dir);
                if(muta){
                    mutation.push(muta);
                    if(muta.type === "MOVE"){
                        newPos = [ownPos[0]-1, ownPos[1]];
                    }
                }
            }
        }else if(dir === "down"){
          sprite = stateList.down;
            if(ownPos[0] === board.length){
                return [];
            }
            if(board[ownPos[0]+1][ownPos[1]] === "X"){
                mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0]+1, ownPos[1]]));
                newPos = [ownPos[0]+1, ownPos[1]];
            }else{
                const muta = board[ownPos[0]+1, ownPos[1]].collide(board, [ownPos[0], ownPos[1]],
                                                                   [ownPos[0]+1, ownPos[1]], dir);
                if(muta){
                    mutation.push(muta);
                    if(muta.type === "MOVE"){
                        newPos = [ownPos[0]+1, ownPos[1]];
                    }
                }
            }
        }else if(dir === "left"){
          sprite = stateList.left;
            if(ownPos[1] === 0){
                return [];
            }
            if(board[ownPos[0]][ownPos[1]-1] === "X"){
                mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0], ownPos[1]-1]));
                newPos = [ownPos[0], ownPos[1]-1];
            }else{
                const muta = board[ownPos[0], ownPos[1]-1].collide(board, [ownPos[0], ownPos[1]],
                                                                   [ownPos[0], ownPos[1]-1], dir);
                if(muta){
                    mutation.push(muta);
                    if(muta.type === "MOVE"){
                        newPos = [ownPos[0], ownPos[1]-1];
                    }
                }
            }
        }else if(dir === "right"){
          sprite = stateList.right;
            if(ownPos[1] === board.width){
                return [];
            }
            if(board[ownPos[0]][ownPos[1]+1] === "X"){
                mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0], ownPos[1]+1]));
                newPos = [ownPos[0], ownPos[1]+1];
            }else{
                const muta = board[ownPos[0], ownPos[1]+1].collide(board, [ownPos[0], ownPos[1]],
                                                                   [ownPos[0], ownPos[1]+1], dir);
                if(muta){
                    mutation.push(muta);
                    if(muta.type === "MOVE"){
                        newPos = [ownPos[0], ownPos[1]+1];
                    }
                }
            }
        }//End direction check

        //Check if tulips adjacent to player position
        //TODO check tulip state
        if(false)
        {
            //First, check in case of index out of bound
            if(newPos[0] === 0)
            {
                if(
                    board[newPos[0]+1][newPos[1]] === "H" &&
                    board[newPos[0]][newPos[1]-1] === "H" &&
                    board[newPos[0]][newPos[1]+1] === "H"
                ){
                    //Delete player piece
                    mutation.push(mutations.deletePiece(newPos));
                }
            }
            if(newPos[0] === board.length)
            {
                if(
                    board[newPos[0]-1][newPos[1]] === "H" &&
                    board[newPos[0]][newPos[1]-1] === "H" &&
                    board[newPos[0]][newPos[1]+1] === "H"
                ){
                  //Delete player piece
                  mutation.push(mutations.deletePiece(newPos));
                }
            }
            if(newPos[1] === 0)
            {
                if(
                    board[newPos[0]+1][newPos[1]] === "H" &&
                    board[newPos[0]-1][newPos[1]] === "H" &&
                    board[newPos[0]][newPos[1]+1] === "H"
                ){
                  //Delete player piece
                  mutation.push(mutations.deletePiece(newPos));
                }
            }
            if(newPos[1] === board.width)
            {
                if(
                    board[newPos[0]+1][newPos[1]] === "H" &&
                    board[newPos[0]-1][newPos[1]] === "H" &&
                    board[newPos[0]][newPos[1]-1] === "H"
                ){
                  //Delete player piece
                  mutation.push(mutations.deletePiece(newPos));
                }
            }
        }

        return mutation;
    }
}
