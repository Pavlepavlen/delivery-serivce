import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Styles = styled('header')`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--main-dark-blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 50;

    nav {
        height: 100%;
    }

    > .icon-wrapper {
        display: none;
    }

    @media screen and (max-width: 639px) {
        .desktop {
            display: none;
        }

        > .icon-wrapper {
            display: block;
        }

        > .icon-wrapper > .icon {
            color: white;
            font-size: 28px;
            cursor: pointer;
        }

        > .icon-wrapper > .icon:hover {
            font-size: calc(28px * 1.1);
        }
    }
`;

const Toolbar = (props) => {

    return (
        <Styles>
            <div className="icon-wrapper" onClick={props.toggleMenu}>
                <FontAwesomeIcon className="icon" icon="bars" />
            </div>
            <Logo logoHeigth={'80%'} />
            <nav className="desktop" >
                <NavigationItems />
            </nav>
        </Styles>
    )
}

export default Toolbar;