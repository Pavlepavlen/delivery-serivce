import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import SandwitchMaker from "./containers/SandwitchMaker/SandwitchMaker";
import Modal from "./hoc/Modal/Modal";
import Checkout from "./containers/Checkout/Checkout";


class App extends Component {

  constructor(props) {
    super(props);

    library.add(faBars);
  }

  render() {
    return (
      <Layout>
          <Switch>
            <Route path="/" exact component={SandwitchMaker} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
      </Layout>
    );
  }
}

export default App;
