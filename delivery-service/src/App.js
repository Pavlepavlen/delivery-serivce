import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import Layout from "./hoc/Layout/Layout";
import SandwitchMaker from "./containers/SandwitchMaker/SandwitchMaker";
import Modal from "./hoc/Modal/Modal";


class App extends Component {

  constructor(props) {
    super(props);

    library.add(faBars);
  }

  render() {
    return (
      <Layout>
          <SandwitchMaker />
      </Layout>
    );
  }
}

export default App;
