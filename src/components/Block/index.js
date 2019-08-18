import React from "react";
import "./style.sass";

function Block(props) {
    return (
        <div className={`${props.block.toLowerCase()}-block block`}>
            {props.children}
        </div>
    );
}

export default Block;