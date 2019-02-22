import React from "react";
import styled from "styled-components";

import BuildControl from "./BuildControl/BuildControl";

const Styles = styled('div')`
    width: 100%;
    background-color: orange;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;

    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    } 
`;

const constrols = [
    {label: 'salad', type: 'salad'},
    {label: 'bacon', type: 'bacon'},
    {label: 'onion', type: 'onion'},
    {label: 'chicken', type: 'chicken'},
    {label: 'cheese', type: 'cheese'},
    {label: 'tomato', type: 'tomato'},
]

const BuildControls = (props) => {

    const disabledArr = {
        ...props.ingredients
    }

    for (let i in disabledArr) {
        disabledArr[i] = disabledArr[i] <= 0;
    }

    const buildControlArr = constrols.map((item) => {
        return <BuildControl 
                    label={item.label} 
                    key={item.label}
                    add={() => props.ingredientAdded(item.type)}
                    remove={() => props.ingredientRemoved(item.type)}
                    disabled={disabledArr[item.type]} />
    });

    /* let buildControlWrapper;

    for (let i = 0; i < Math.ceil(Object.keys(props.ingredients).length / 2); i++) {
        console.log(i);
         for (let n = 0; n < Object.keys(props.ingredients).length; n + 2) {
            console.log(n);
            buildControlWrapper = <div>{buildControlArr[n]}{buildControlArr[n+1]}</div>
        }
    } */

    

    return (
        <Styles>
            <h3>Current price : {props.price.toFixed(2)} $</h3>
                {buildControlArr}
            <button disabled={!props.purchasable} onClick={props.order} >Order now</button>
        </Styles>
    )
}

export default BuildControls;