import React, { Fragment } from "react";
import styled from "styled-components";

import Backdrop from "../Backdrop/Backdrop";

const Styles = styled('div')`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    animation: modalOpen .4s;

    @media screen and (min-width: 600px) {
    .Modal {
        width: 500px;
        left: calc(50% - 250px);
    }
}

    @keyframes modalOpen {
        from {top: -50%;}
        to {top: 30%;}
    }
`;

const Modal = (props) => {

    let modal = null;
    if (props.show !== null) {
        modal =     <Fragment>
                        <Backdrop show={true} />
                        <Styles>
                            {props.children}
                        </Styles>
                    </Fragment>
    }
    return (
         modal 
    )
}

export default Modal;