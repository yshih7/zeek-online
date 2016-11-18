class Piece{
  type;
  sprite;

  //Look up table for the tye of piece
  //Useful for converting map data into meaning piece name
  typeList.enum = {
    A : Player,
    B : Wall,
    C : Goal,
    D : Death Goal,
    E : Sunflower,
    F : Treasure Chest,
    G : Death Sunflower,
    H : Purple Tulip,
    I : Apple,
    J : Key,
    K : Gate,
    L : Crystal,
    M : Dynamite,
    N : Barrels,
    O : Balls,
    X : Empty
  }

  //Lookup table to the URL of the sprite
  spriteList.enum = {
    //TODO need actual link
    //Enum for URL of the sprite
    Player : "",
    Wall : "",
    Goal : "",
    Death Goal : "",
    Sunflower : "",
    Treasure Chest : "",
    Death Sunflower : "",
    Purple Tulip : "",
    Apple : "",
    Key : "",
    Gate : "",
    Crystal : "",
    Dynamite : "",
    Barrels : "",
    Balls : ""
  }

  constructor(type)
  {
    //Assign the type of piece and associate URL of sprite to it
    //TODO Can we reference it as name value pairs?
    this.type = typeList.enum[type];
    this.sprite = spriteList.enum[type];
  }

  //Piece update its status, for tulip?
  function update(board, ownPos, dt)
  {
    mutation;
    //TODO updates the board
    return mutation;
  }

  //If player collides into this piece, perform various check
  function collide(board, playerPos, ownPos, dir)
  {
    mutation;
    if(this.type === "Wall"){
      return null;
    }else if(this.type === "Goal")
    {
      //Eat and win
      mutation.push(muta_gen("moved", playerPos, ownPos));
      mutation.push(muta_gen("win", null, null, null, null, null, true));
    }else if(this.type === "Death Goal")
    {
      //Eat and loose
      mutation.push(muta_gen("moved", playerPos, ownPos));
      mutation.push(muta_gen("win", null, null, null, null, null, false));
    }else if(this.type === "Sunflower")
    {
      //eat and increment score, arbitrarily set to 10
      mutation.push(muta_gen("moved", playerPos, ownPos));
      mutation.push(muta_gen("increment", null, null, null, null, 10));
    }else if(this.type === "Treasure Chest")
    {
      //eat and increment score, arbitrarily set to 50
      mutation.push(muta_gen("moved", playerPos, ownPos));
      mutation.push(muta_gen("increment", null, null, null, null, 50));
    }else if(this.type === "Death Sunflower")
    {
      //eat and loose
      mutation.push(muta_gen("moved", playerPos, ownPos));
      mutation.push(muta_gen("win", null, null, null, null, null, false));
    }else if(this.type === "Purple Tulip")
    {
      //If player can run into tulip, tulip must be closed. Do nothing
      return null;
    }else if(this.type === "Apple")
    {
      //TODO Try to push block against (Maybe write a special collide method?)

    }else if(this.type === "Key")
    {
      //Try to eat first. If player has key, do nothing. If not, add to inven and move
      if(board[playerPos[0]][playerPos[1]].inventory.includes("Key") ){
        return null;
      }else{
        board[playerPos[0]][playerPos[1]].inventory.push("Key");
        mutation.push(muta_gen("moved", playerPos, ownPos));
      }
    }else if(this.type === "Gate")
    {
      //If has key, move in and replace block. Else, do nothing
      if(board[playerPos[0]][playerPos[1]].inventory.includes("Key") ){
        mutation.push(muta_gen("moved", playerPos, ownPos));
        board[playerPos[0]][playerPos[1]].inventory.pop("Key");
      }else{
        return null;
      }
    }

    //TODO need crystal, dynamite, barrels, balls

    return mutation;
  }


  //Mutation format: let mutation = new Object();
  //(1)
  //  mutation.type = "moved"
  //  mutation.old = [i,j]
  //  mutation.new = [i,j]
  //(2)
  //  mutation.type = "deleted"
  //  mutation.loc = [i,j]
  //(3)
  //  mutation.type = "changed"
  //  mutation.loc = [i,j]
  //  mutation.piece = new_piece_type
  //(4)
  //  mutation.type = "increment"
  //  mutation.score = int
  //(5)
  //  mutation.type = "win"
  //  mutation.bool = true/false
  //(6)
  //  mutation.type = "inventory"
  //  mutation.inven = "key or invisi_shroom"
  //Input:  type: type of mutation
  //        old: old location
  //        new: new location
  //        loc: cordinates (Separate from old and new for semantic meaning)
  function muta_gen(type, old_loc, new_loc, loc, new_piece, score, bool, inven){
    let muta = new Object();
    muta.type = type;
    if(type === "moved"){
      muta.old = old_loc;
      muta.new = new_loc;
    }
    if(type === "deleted"){
      muta.loc = loc;
    }
    if(type === "changed"){
      muta.loc = loc;
      muta.piece = new_piece;
    }
    if(type === "increment"){
      muta.score = score;
    }
    if(type === "win"){
      muta.bool = bool;
    }
    if(type === "inventory"){
      muta.inven = inven;
    }

    return muta;
  }

}
