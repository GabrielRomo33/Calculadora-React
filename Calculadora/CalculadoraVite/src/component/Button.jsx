import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class button extends React.Component {
    static PropTypes = {
        name: PropTypes.string,
        orange: PropTypes.bool,
        wide: PropTypes.bool,
        clickHandler: PropTypes.func,
    };

    handlerclick = () => {
        this.props.clickHandler(this.props.name);
    };

    render(){
        const className = [
            "component-button",
            this.props.orange ? "orange" : "",
            this.props.wide ? "wide" : "",
        ];
        return(
            <div className={className.join(" ").trim()}>
                <button onClick={this.handlerclick}>{this.props.name}</button>
            </div>
        );
        
    }
}