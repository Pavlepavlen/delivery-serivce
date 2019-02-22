import React, {Fragment} from "react";
import styled from "styled-components";

const Styles = styled('main')`
    margin-top: 60px;
`;

const Layout = (props) => {
    return (
        <Fragment>
            <div>
                navigation
            </div>
            <Styles>
                {props.children}
            </Styles>
        </Fragment>
    )
}

export default Layout;