import React, { Component, Fragment } from "react";

import Sandwitch from "../../components/Sandwitch/Sandwitch";
import BuildControls from "../../components/Sandwitch/BuildControls/BuildControls";
import OrderSummary from "../../components/Sandwitch/OrderSummary/OrderSummary";
import ClosingContext from "../../context/closing-context";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1,
    onion: 0.3,
    bacon: 1,
    tomato: 0.3,
    chicken: 1.5,
}

class BurderBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            onion: 0,
            chicken: 0,
            cheese: 0,
            tomato: 0
        },
        totalPrice: 3,
        purchasable: false,
        orderDone: false
    }

    updatePurchaseState = (ingredientsUpdated) => {
        const ingredients = {
            ...ingredientsUpdated
        };

        const ingredientsSum = Object.keys(ingredients)
            .map(item => {
                return ingredients[item];
            })
            .reduce((acc, element) => {
                return acc + element;
            }, 0);
        
        this.setState({
            purchasable: ingredientsSum > 0
        });
    }

    purchaseOrderHandler = () => {
        this.setState({
            orderDone: true
        })
    }

    cancelPurchasingHandler = (event) => {
        console.log(event.target.parentElement.nodeName);
        if( event.target.parentElement.nodeName === "MAIN" 
            || event.target.textContent.toLowerCase() === "cancel");

        this.setState({
            orderDone: false
        })
        
    }

    submitOrderHandler = () => {
        console.log('submitted');
    }

    addIngredientsHnadler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];

        this.setState((prevState, props) => {
            return {
                ingredients: updatedIngredients,
                totalPrice: prevState.totalPrice + priceAddition
            }
        });

        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
                ...this.state.ingredients
            };

        if (updatedCount >= 0) {
            updatedIngredients[type] = updatedCount;
            const priceDeduction = INGREDIENT_PRICES[type];

            this.setState((prevState, props) => {
                return {
                    ingredients: updatedIngredients,
                    totalPrice: prevState.totalPrice - priceDeduction
                }
            });
        }

        this.updatePurchaseState(updatedIngredients);
    }


    render () {
        return (
            <Fragment>
                <Sandwitch ingredients={this.state.ingredients} />
                <BuildControls  ingredientAdded={this.addIngredientsHnadler}
                                ingredientRemoved={this.removeIngredientHandler} 
                                ingredients={this.state.ingredients}
                                price={this.state.totalPrice}
                                purchasable={this.state.purchasable}
                                order={this.purchaseOrderHandler} />
                <ClosingContext.Provider value={{closeModal: this.cancelPurchasingHandler}}>
                    {this.state.orderDone   ? <OrderSummary submitOrder={this.submitOrderHandler}
                                                            closeOrder={this.cancelPurchasingHandler} 
                                                            ingredients={this.state.ingredients}
                                                            price={this.state.totalPrice} /> 
                                            : null}
                </ClosingContext.Provider>
            </Fragment>
        )
    }
}

export default BurderBuilder;