export const move = (oldPos, newPos) => ({type: "MOVE", oldPos, newPos});

//delete is a reserved word
export const deletePiece = (pos) => ({type: "DELETE", pos});

export const change = (pos, piece) => ({type: "CHANGE", pos, piece});

export const incrementScore = (amt) => ({type: "INCREMENT_SCORE", amt});

export const win = () => ({type: "WIN"});

export const addInventory = item => ({type: "ADD_INVENTORY", item});

export const deleteInventory = item => ({type: "DELETE_INVENTORY", item});
