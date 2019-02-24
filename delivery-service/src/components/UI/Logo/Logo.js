import React from "react";
import styled from "styled-components";
import logoPath from "../../../assets/img/logo.png";

const Styles = styled('div')`
    max-height: 100%;
    height: ${(props) => props.logoHeigth};
    padding: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;

    > img {
        max-height: 100%;
        height: 100%;
        border-radius: 5px;
    }

    .title-sandwitch {
        font-family: 'Pacifico';
        font-size: 24px;
        color: var(--main-dark-blue);
        padding: 0 6px;
    }

    @media screen and (min-width: 640px){
        .title-sandwitch {
            color: white;
            padding: 0 12px;
        }
    }
`;

const Logo = ({logoHeigth}) => {
    return (
        <Styles logoHeigth={logoHeigth} >
            <span className="title-sandwitch">Sandwitch</span>
            <img src={logoPath}
                 alt="sandwith-logo" />
        </Styles>
    )
}

export default Logo;
