import tetriminos from "../tetriminos.json";

const getBlock = () => {
    //Generate a random index
    const blockIndex = Math.floor(Math.random() * tetriminos.length);
    //Get a random block from the json file
    return tetriminos[blockIndex];
}

const defaultState = {
    position: { x: 0, y: 0 },
    block: getBlock().block,
    collision: false
}

const playerReducer = (state = defaultState, action) => {
    if (action.type === "PLAYER_LOAD") {
        return action.payload;
    } else {
        return state;
    }
};

export default playerReducer;