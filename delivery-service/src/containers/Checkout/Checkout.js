import React, { Component } from "react";

import ChecoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            tomato: 1,
            onion: 1,
            cheese: 1,
            chicken: 1
        }
    }

    render () {
        return (
            <div>
                <ChecoutSummary ingredients={this.state.ingredients} />
            </div>
        )
    }
}

export default Checkout;