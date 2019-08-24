export const playerLoad = (position, block, collision) => {
    return {
        type: "PLAYER_LOAD",
        payload: { position, block, collision }
    };
};