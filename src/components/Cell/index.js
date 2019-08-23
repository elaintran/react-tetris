import React, { Component } from "react";
import Block from "../Block";
import tetriminos from "../../tetriminos.json";

const getBlock = () => {
    //Generate a random index
    const blockIndex = Math.floor(Math.random() * tetriminos.length);
    //Get a random block from the json file
    return tetriminos[blockIndex];
}

class Cell extends Component {
    render() {
        return (
            // <Block block={getBlock().block} />
            <Block />
        );
    }
}

export default Cell;