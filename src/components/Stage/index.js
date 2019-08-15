import React, { Component } from "react";
import Cell from "../Cell";

const stageWidth = 10;
const stageHeight = 20;

class Stage extends Component {
    createStage = () => {
        //Array.from(object, mapFunction)
        //First parameter = Array(stageHeight) - 20 empty arrays (stage row)
        //Second parameter = map function to call each item in array
        //For each row, create a new array that is 10 columns wide
        return Array.from(Array(stageHeight), () => new Array(stageWidth).fill([0, "clear"]));
    }

    render() {
        return (
            <div>
                {this.createStage().map(row =>
                    row.map((cell, x) =>
                        <Cell key={x} type={cell[0]} />
                ))}
            </div>
        );
    }
}

export default Stage;