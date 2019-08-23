import React from "react";
import "./style.sass";

const FlexWrapper = props => {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    );
}

export default FlexWrapper;