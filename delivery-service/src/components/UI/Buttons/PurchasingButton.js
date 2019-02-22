import React from "react";
import styled from "styled-components";
import propsTypes from "prop-types";

const Styles = styled("button")`
    color: ${((props) => props.type === "submit" ? "blue" : "red")};
    display: inline;
    text-transform: uppercase;
    padding: 12px;
    margin: 3%;
    border: 1px solid white;
    cursor: pointer;
    transition: all .3s ease-in;
    outline: none;

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