import React, { Fragment } from "react";
import styled from "styled-components";

import Modal from "../../../hoc/Modal/Modal";
import PurchasingButton from "../../UI/Buttons/PurchasingButton";

const Styles = styled(Fragment)`
    > h3 {
        font-size: 1.1rem;
    }

    span {
        text-transform: uppercase;
    }
`;

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return  <li key={key}>
                        <span>{key}</span> : {props.ingredients[key]}
                    </li>;
        })

    return (
        <Modal>
            <Styles>
                <h3>Your order</h3>
                <p>Tasty sandwitch with :</p>
                <ul>   
                    { ingredientSummary }
                </ul>
                <p>Total Price: {props.price.toFixed(2)} $</p>
                <p>Are you ready to make order?</p>
                <PurchasingButton   onClick={props.submitOrder}
                                    type="submit">Submit</PurchasingButton>
                <PurchasingButton   onClick={(event) => {props.closeOrder(event)}} 
                                    type="cancel">Cancel</PurchasingButton>
            </Styles>
        </Modal>
    )
}

export default OrderSummary;