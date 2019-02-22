import React from "react";
import styled from "styled-components";
import propsTypes from "prop-types";

const Styles = styled("button")`
    color: #000;
    display: block;
    padding: 12px;
    margin: 3%;
    border-radius: 100%;
    border: 1px solid white;
    cursor: pointer;
    transition: all .3s ease-in;
    outline: none;
    background-color: ${((props) => props.type === "add" ? "blue" : "red")};
    background-color: ${((props) => props.disabled ? "gray !important" : "")};
    cursor: ${((props) => props.disabled ? "not-allowed !important" : "pointed")};

    :hover {
        background-color: ${((props) => props.type === "add" ? "darkblue" : "salmon")};

    }
`;

const Button = (props) => {
    return (
        <Styles {...props}>
            {props.children}
        </Styles>
    )
}

Button.propsTypes = {
    type: propsTypes.string.isRequired
}

export default Button;