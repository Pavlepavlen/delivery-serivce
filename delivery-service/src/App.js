import React, { Component } from 'react';

import Layout from "../src/components/Layout/Layout";
import SandwitchMaker from "./containers/SandwitchMaker/SandwitchMaker";
import Modal from "./hoc/Modal/Modal";


class App extends Component {
  render() {
    return (
      <Layout>
          <SandwitchMaker />
      </Layout>
    );
  }
}

export default App;
