import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Styles = styled('div')`
.bread-bottom {
    height: 2rem;
    width: 80%;
    background: yellow;
    border: 6px solid var(--bread);
    border-bottom: 6px solid var(--crust);
    border-radius: 8%;
    margin: 2% auto;
    position: relative;
}

.bread-bottom::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background: repeating-linear-gradient(0deg, sandybrown 0px, transparent 80px), repeating-linear-gradient(-90deg, var(--crust) 80px, var(--crust) 120px, transparent 120px, transparent 180px);
}

.bread-top {
    height: 2.2rem;
    width: 80%;
    background: yellow;
    border: 6px solid var(--bread);
    border-top: 6px solid var(--crust);
    border-radius: 8%;
    margin: 2% auto;
    position: relative;
}

.bread-top::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background: repeating-linear-gradient(0deg, sandybrown 0px, transparent 80px), repeating-linear-gradient(-90deg, var(--crust) 80px, var(--crust) 120px, transparent 120px, transparent 180px);
}

.cheese {
    width: 90%;
    height: 1rem;
    margin: 1% auto;
    background: linear-gradient(#f4d004, #d6bb22);
    border-radius: 20px;
}

.salad {
    width: 90%;
    height: 0.8rem;
    margin: 1% auto;
    background: linear-gradient(#228c1d, #91ce50);
    border-radius: 20px;
}

.bacon {
    width: 80%;
    height: 0.6rem;
    background: linear-gradient(#bf3813, #c45e38);
    margin: 1% auto;
}

.tomato {
    width: 80%;
    height: 1rem;
    background: linear-gradient(#c0170b, #cf190c);
    border: 4px solid #af180d;
    margin: 1% auto;
}

.onion {
    width: 80%;
    height: 0.6rem;
    background: linear-gradient(#7a1d7a, #922092);
    margin: 1% auto;
    border-radius: 30%;
}

.chicken {
    width: 80%;
    height: 1.5rem;
    background: linear-gradient(#f1c296, #f7d7ba);
    margin: 1% auto;
    border-radius: 24%;
    position: relative;
    border: 4px solid #964c07;
}

.chicken::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background: repeating-linear-gradient(45deg, rgba(150, 76, 7, 0.4) 30px, transparent 40px);
}
`;

const SandwitchIngredient = (props) => {

    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className="bread-bottom"></div>
            break;
        case ('bread-top'):
            ingredient = <div className="bread-top"></div>
            break;
        case ('chicken'):
            ingredient = <div className="chicken"></div>
            break;
        case ('onion'):
            ingredient = <div className="onion"></div>
            break;
        case ('bacon'):
            ingredient = <div className="bacon"></div>
            break;
        case ('salad'):
            ingredient = <div className="salad"></div>
            break;
        case ('cheese'):
            ingredient = <div className="cheese"></div>
            break;
        case ('tomato'):
            ingredient = <div className="tomato"></div>
            break;
        default: 
            ingredient = null;
        }
    



    return (
        <Styles>
            { ingredient }
        </Styles>
    )
}

SandwitchIngredient.propTypes = {
    type: propTypes.string.isRequired
}

export default SandwitchIngredient;