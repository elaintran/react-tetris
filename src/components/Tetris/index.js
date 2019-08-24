import React, { Component } from "react";
import { connect } from "react-redux";
import Stage from "../Stage";
import FlexWrapper from "../FlexWrapper";
import * as playerActions from "../../actions/playerActions.js";

class Tetris extends Component {
    componentDidMount() {
        console.log(this.props.player);
        this.props.dispatch(playerActions.playerLoad({x: 0, y: 0}, "", false));
        console.log(this.props.player);
    }

    render() {
        return (
            <div>
                <FlexWrapper>
                    <Stage />
                </FlexWrapper>
            </div>
        );
    }
}

export default connect(store => {
    const { player } = store;
    return { player };
})(Tetris);