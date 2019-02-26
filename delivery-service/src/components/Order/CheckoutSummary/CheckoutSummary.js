import React from "react";
import styled from "styled-components";

import Sandwich from "../../Sandwitch/Sandwitch";
import PurchasingButton from "../../UI/Buttons/PurchasingButton";

const Styles = styled('div')`
    text-align: center;
    width: 80%;
    margin: auto;

    @media screen and (min-width: 640px){
        width: 500px;
    }
`;

const CheckoutSummary = (props) => {
    return (
        <Styles>
            <h1>We hope it tastes well!</h1>
            <div style={{width: "100%", margin: "auto"}}>
                <Sandwich ingredients={props.ingredients} />
            </div>
            <PurchasingButton type="submit">Ok</PurchasingButton>
            <PurchasingButton type="cancel">Cancel</PurchasingButton>
        </Styles>
    )
}


export default CheckoutSummary;