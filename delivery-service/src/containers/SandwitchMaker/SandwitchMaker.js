import React, { Component, Fragment } from "react";
import axios from "../../axios-orders";

import Sandwitch from "../../components/Sandwitch/Sandwitch";
import BuildControls from "../../components/Sandwitch/BuildControls/BuildControls";
import OrderSummary from "../../components/Sandwitch/OrderSummary/OrderSummary";
import Loader from "../../components/UI/Loader/Loader";
import LoaderWithoutModal from "../../components/UI/LoaderWithoutModal/LoaderWithoutModal";
import ClosingContext from "../../context/closing-context";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

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
        ingredients: null,
        totalPrice: 3,
        purchasable: false,
        orderDone: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        axios.get('https://react-my-sandwich-320a9.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({
                    ingredients: response.data
                });
            })
            .catch(error => {
                this.setState({
                    error: true
                })
            });
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

        if( event.target.parentElement.nodeName === "MAIN" 
            || event.target.textContent.toLowerCase() === "cancel");

        this.setState({
            orderDone: false
        })
        
    }

    submitOrderHandler = () => {

        /* this.setState({
            loading: true
        })

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            delivery: 'free',
            customer: {
                name: 'Bob',
                address: {
                    street: 'street 1',
                    city: 'Lviv',
                    district: 'Shevchenko'
                },
                email: 'test@test@gmail.com',
            },
        }

        axios.post('/orders.json', order)
            .then(responce => {
                this.setState({
                    loading: false,
                    orderDone: false
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    orderDone: false
                })
            }); */

        console.log(this.props.history.push('/checkout'));
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

        let orderSummary = <OrderSummary    submitOrder={this.submitOrderHandler}
                                            closeOrder={this.cancelPurchasingHandler} 
                                            ingredients={this.state.ingredients}
                                            price={this.state.totalPrice} />
    

        if(this.state.loading) {
            orderSummary = <Loader />
        }

        let sandwich = this.state.error ? <p>Sorry, but ingredients can't be loaded!</p> : <LoaderWithoutModal />;
        
        if(this.state.ingredients !== null) {
            sandwich = (
            <Fragment>
            <Sandwitch ingredients={this.state.ingredients} />
            <BuildControls  ingredientAdded={this.addIngredientsHnadler}
                            ingredientRemoved={this.removeIngredientHandler} 
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            purchasable={this.state.purchasable}
                            order={this.purchaseOrderHandler} />
            </Fragment>
            )
        }

        return (
            <Fragment>
                { sandwich }
                <ClosingContext.Provider value={{closeModal: this.cancelPurchasingHandler}}>
                {this.state.orderDone   ? orderSummary
                                        : null}
                </ClosingContext.Provider>
            </Fragment>
        )
    }
}

export default withErrorHandler(BurderBuilder, axios);