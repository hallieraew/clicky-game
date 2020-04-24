import React from "react";
import "./style.css"

function Counter(props) {
	return (
        <div className = "counter">
            <br />
            <h1>Your Score: {props.score} </h1>
            <h1>Top Score: {props.topScore}</h1>
            <br />
            {props.message ? <h3>{props.message}</h3> : null}
        </div>
    )}

    export default Counter;