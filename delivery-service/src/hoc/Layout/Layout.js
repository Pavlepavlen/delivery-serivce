import React, {Component, Fragment} from "react";
import styled from "styled-components";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideMenu from "../../components/Navigation/SideMenu/SideMenu";
import ClosingContext from "../../context/closing-context";

const Styles = styled('main')`
    margin-top: 72px;
`;

class Layout extends Component {

    state = {
        showMenu: false
    }

    closeMenuHandler = (event) => {    
        if(event.target.className.split(' ')[0] === 'backdrop') {
            this.setState({
                showMenu: false
            })
        }
    }

    toggleMenuHandler = () => {
        this.setState((prevState, props) => {
            return {
                showMenu: !prevState.showMenu
            }
        })
    }

    render () {
        return (
        <Fragment>
            <Toolbar toggleMenu={this.toggleMenuHandler} />
            <ClosingContext.Provider value={{closeModal: this.closeMenuHandler}}>
                <SideMenu showMenu={this.state.showMenu} />
            </ClosingContext.Provider>
            <Styles>
                {this.props.children}
            </Styles>
        </Fragment>
        )
    }
    
}

export default Layout;