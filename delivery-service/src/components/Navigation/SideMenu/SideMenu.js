import React, { Fragment } from "react";
import styled from "styled-components";

import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../../hoc/Backdrop/Backdrop";

const Styles = styled('div')`
    position: fixed;
    width: 320px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 40px 20px;
    box-sizing: border-box;
    transition: transform .3s ease-out;
    transform: ${(props) => props.show ? "translateX(0)" : "translateX(-100%)"};

    @media screen and (min-width: 640px){
        display: none;
    }
    
`;

const SideMenu = (props) => {
    return (
        <Fragment>
            <Backdrop show={props.showMenu} />
            <Styles show={props.showMenu}>
                <Logo logoHeigth={'15%'} />
                <nav>
                    <NavigationItems />
                </nav>
            </Styles>
        </Fragment>
    );
}

export default SideMenu;