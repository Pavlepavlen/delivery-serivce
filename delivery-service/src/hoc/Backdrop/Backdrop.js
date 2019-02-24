import React from "react";
import styled from "styled-components";
import ClosingContext from "../../context/closing-context";

const Styles = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    z-index: 100;
    max-height: 100%;
    width: 100%;
    max-height: 100%;
    height: 100%;
    transition: all .3s ease-out;
`;

const Backdrop = ({show, children}) => {
    return (
        <ClosingContext.Consumer>
            {(context) => show ? <Styles className="backdrop" onClick={(event) => {context.closeModal(event)}}>
                {children}
            </Styles> : null}
        </ClosingContext.Consumer>
    )
}

export default Backdrop;