import React, { Component } from "react";
import tetriminos from "../../tetriminos.json";

const checkTetriminos = () => {
    const pieceIndex = Math.floor(Math.random() * tetriminos.length);
    console.log(tetriminos[pieceIndex]);
}

class Cell extends Component {
    render() {
        return (
            <div>
                cell
            </div>
        );
    }
}

export default Cell;