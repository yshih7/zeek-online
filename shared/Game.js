import Piece from "./piece";
import Player from "./player";

const INIT_BONUS = 10000; //TODO: Figure out how much this should start at

export default class Game
{
    board;        //2D array containing all the pieces
    playerPos;    //current position of player
    score;        //current score
    bonus;        //bonus score
    initialState; //Initial board state, useful for restarting the board
    length;       //Length of the board
    width;        //Width of the board

    get player()
    {
        return this.board && this.playerPos && this.board[this.playerPos[0]][this.playerPos[1]];
    }

    constructor(map, length, width)
    {
        this.initialState = map;
        this.length = length;
        this.width = width;
        //Construct the board
        this.build();
    }

    //Function to check the input from user
    //Possible inputs:  Move: Player piece attempts to move
    //                  Reset: Reset the board state
    input(input)
    {
        if (input.type === "move")
        {
            //Player#move() generates a list of mutations to the board
            //processMutations processes that list
            this.processMutations(this.player.move(this.board, this.playerPos, input.dir));
        }
    }

    //Helper function for constructing the board
    build()
    {
        this.score = 0;
        this.bonus = INIT_BONUS;

        this.board = [];
        for (let i = 0; i < this.initialState.length; i++)
        {
            const v = Math.floor(i / this.length);
            const h = i % this.length;
            const type = this.initialState[i];

            if (h === 0)
            {
                this.board[v] = [];
            }

            if (type === "X")
            {
                this.board[v][h] = null;
            }
            else if (type === "A")
            {
                this.board[v][h] = new Player();
                this.playerPos = [v, h];
            }
            else
            {
                this.board[v][h] = new Piece(type);
            }
        }
    }

    //Helper function for processing the list of mutations that
    //is generated from muta_gen() method contained in Piece class
    //Processed here in case control flow is required
    processMutation(mutaList)
    {
        for(const k of mutaList)
        {
            if (k.type === "moved")
            {
                this.board[k.new_loc[0]][k.new_loc[1]] = this.board[k.old_loc[0]][k.old_loc[1]];
                this.board[k.old_loc[0]][k.old_loc[1]] = null;
            }
            if (k.type === "deleted")
            {
                this.board[k.loc[0]][k.loc[1]].type = null;
            }
            if(k.type === "increment")
            {
                this.score += k.score;
            }
            if (k.type === "win")
            {
                //TODO make win or lose do something
            }
            if(k.type==="inventory")
            {
                //Doesn't do anything right now, it is directly
                //manipulated in piece method
            }
        }
    }
}
