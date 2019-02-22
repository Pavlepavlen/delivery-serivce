import React from "react";
import styled from "styled-components";

import SandwitchIngredient from './SandwitchIngredient/SandwitchIngredient';

const Styles = styled('div')`
    width: 100%;
    margin: auto;
    height: 250px;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;

    p {
        font-size: 1.2rem;
        margin: 2% auto;
        width: 90%
    }

    @media screen and (min-width: 500px) and (min-height: 401px){
        width: 350px;
        height: 300px;
    }

    @media screen and (min-width: 960px) and (min-height: 401px){
        width: 450px;
        height: 400px;
    }

    @media screen and (min-width: 960px) and (min-height: 700px){
        width: 700px;
        height: 600px;
    }
`;

const Sandwitch = ({ingredients}) => {

    let innerIngredients = Object.keys(ingredients);
    /* let ingredientsCount = Object.values(ingredients).reduce((acc, curr) => {
        return acc + curr;
    }, 0); */
    
    innerIngredients = innerIngredients.map((item) => {
            return [...Array(ingredients[item])].map((_, index) => {
                return <SandwitchIngredient type={item} key={item + index} />
            });
        })
        .reduce((arr, element) => {
            return arr.concat(element);
        }, []);

    return (
        <Styles>
            <SandwitchIngredient type={'bread-top'} />
                {innerIngredients.length > 0 ? innerIngredients : <p>Start adding ingredients</p>}
            <SandwitchIngredient type={'bread-bottom'} />
        </Styles>
    )
}

export default Sandwitch;