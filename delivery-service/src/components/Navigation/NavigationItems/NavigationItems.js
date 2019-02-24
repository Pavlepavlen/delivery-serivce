import React from "react";
import styled from "styled-components";

import NavigationItem from "./NavigationItem/NavigationItem";

const Styles = styled('ul')`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    height: 20%;
    width: 100%;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 640px){
        flex-flow: row;
        height: 100%;
    }
`;

const NavigationItems = (props) => {
    return (
        <Styles>
            <NavigationItem active link="/">First</NavigationItem>
            <NavigationItem link="/">Second</NavigationItem>
        </Styles>
    )
}

export default NavigationItems;