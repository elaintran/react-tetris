import React from "react";
import "./style.css";

function Block(props) {
    return (
        <div className={`${props.block.toLowerCase()}-block`}>
            {props.children}
        </div>
    );
}

export default Block;