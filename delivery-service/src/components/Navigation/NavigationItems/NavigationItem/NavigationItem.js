import React from "react";
import styled from "styled-components";

const Styles = styled('li')`

    width: 100%;
    margin: 3px 0;
    display: block;
    box-sizing: border-box;

    > a {
        box-sizing: border-box;
        display: block;
        text-decoration: none;
        color: var(--main-dark-blue);
        border-bottom: 4px solid var(--main-dark-blue);
        width: 100%;
        padding: 10px;
    }

    > a:active, a:hover, a.active {
        background-color: var(--main-yellow);
        border-bottom: 4px solid var(--main-aqua);
        color: white;
    }
    

    @media screen and (min-width: 640px){
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;

        > a {
            padding: 16px 10px;
            color: white;
            height: 100%;
            border-bottom: 4px solid transparent;
            color: white;
        }
    }
`;

const NavigationItem = ({link, active, children}) => {
    return (
        <Styles>
            <a href={link} className={active ? 'active' : ''}>{children}</a>
        </Styles>
    )
}

export default NavigationItem;