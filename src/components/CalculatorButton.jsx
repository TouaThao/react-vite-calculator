import React from "react";

function CalculatorButton(props){
    return (
        <button className={props.className} onClick={() =>props.onClick(props.value)}>{props.value}</button>
    )
}

export default CalculatorButton;