import pieces from "./pieces/Piece";
import Player from "./pieces/Player";

const INIT_BONUS = 10000; //TODO: Figure out how much this should start at
const MS_PER_BONUS_POINT = 100; //10pts a second

export default class Game
{
    board;        //2D array containing all the pieces
    playerPos;    //current position of player
    score;        //current score
    bonus;        //bonus score
    initialState; //Initial board state, useful for restarting the board
    width;       //width of the board
    height;        //height of the board
    won;  //Has the game been won?

    get player()
    {
        return this.board && this.playerPos && this.board[this.playerPos[0]][this.playerPos[1]];
    }

    constructor(map, width, height)
    {
        this.initialState = map;
        this.width = width;
        this.height = height;
        //Construct the board
        this.build();
    }

    //Function to check the input from user
    //Possible inputs:  Move: Player piece attempts to move
    input(input)
    {
        if (input.type === "MOVE")
        {
            //Player#move() generates a list of mutations to the board
            //processMutations processes that list
            this.player && this.processMutations(this.player.move(this.board, this.playerPos, input.dir));
        }
    }

    //Helper function for constructing the board
    build()
    {
        this.score = 0;
        this.bonus = INIT_BONUS;
        this.won = false;

        this.board = [];
        for (let i = 0; i < this.initialState.length; i++)
        {
            const v = Math.floor(i / this.width);
            const h = i % this.width;
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
                this.board[v][h] = new pieces[type]();
            }
        }
    }

    //Helper function for processing the list of mutations that
    //is generated from muta_gen() method contained in Piece class
    //Processed here in case control flow is required
    processMutations(mutaList)
    {
        for(const muta of mutaList)
        {
            switch (muta.type)
            {
                case "MOVE":
                    this.board[muta.oldPos[0]][muta.oldPos[1]] = this.board[muta.newPos[0]][muta.newPos[1]];
                    this.board[muta.oldPos[0]][muta.oldPos[1]] = null;
                    break;
                case "DELETE":
                    this.board[muta.pos[0]][muta.pos[1]] = null;

                    if (muta.pos[0] === this.playerPos[0] && muta.pos[1] === this.playerPos[1])
                    {
                        this.playerPos = null;
                    }
                    break;
                case "INCREMENT_SCORE":
                    this.score += muta.amt;
                    break;
                case "WIN":
                    this.score += this.bonus;
                    this.won = true;
                    break;
                case "ADD_INVENTORY":
                    this.player.inventory.add(muta.item);
                    break;
                case "DELETE_INVENTORY":
                    this.player.inventory.delete(muta.item);
                    break;
                case "CHANGE":
                    this.board[muta.pos[0]][muta.pos[1]] = new muta.piece();
                    break;
            }
        }
    }

    //We need to standardize on what units this will be in. Probably milliseconds
    update(dt)
    {
        this.bonus -= Math.floor(dt / MS_PER_BONUS_POINT);

        this.player.update(this.board, this.playerPos, dt);
        for (let i = 0; i < this.board.length; i++)
        {
            for (let j = 0; j < this.board[i].length; j++)
            {
                this.board[i][j].update(this.board, [i, j], dt);
            }
        }
    }
}
