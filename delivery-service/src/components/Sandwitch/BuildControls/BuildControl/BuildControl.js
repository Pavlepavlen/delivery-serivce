import React from "react";
import styled from "styled-components";

import IngredientsButton from "../../../UI/Buttons/IngredientsButton";

const Styles = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    text-transform: capitalize;
`;

const btnType = {
    add: 'add',
    delete: 'delete'
}

const BuildControl = (props) => {
    return (
        <Styles>
            <p>{props.label}</p>
            <IngredientsButton type={btnType.add} 
                    onClick={props.add}>Add</IngredientsButton>
            <IngredientsButton type={btnType.delete}
                    onClick={props.remove}
                    disabled={props.disabled}>Delete</IngredientsButton>
        </Styles>
    )
}

export default BuildControl;