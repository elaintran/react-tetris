import React from "react";
import "./style.sass";

const checkBlock = block => {
    if (block === undefined) {
        return <div className="block"></div>;
    } else {
        return <div className={`${block.toLowerCase()}-block block`}></div>;
    }
}

const Block = props => {
    return (
        <div>
            {checkBlock(props.block)}
        </div>
    );
}

export default Block;