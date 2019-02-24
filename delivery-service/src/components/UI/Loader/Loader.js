import React, {Fragment} from "react";
import styled from "styled-components";

import Modal from "../../../hoc/Modal/Modal";

const Styles = styled('Fragment')`
    .loader,
    .loader:before,
    .loader:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load 1.8s infinite ease-in-out;
    animation: load 1.8s infinite ease-in-out;
    }
    .loader {
    color: #0b132b;
    font-size: 10px;
    margin: 80px auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    }
    .loader:before,
    .loader:after {
    content: '';
    position: absolute;
    top: 0;
    }
    .loader:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
    }
    .loader:after {
    left: 3.5em;
    }
    @-webkit-keyframes load {
    0%,
    80%,
    100% {
        box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
        box-shadow: 0 2.5em 0 0;
    }
    }
    @keyframes load {
    0%,
    80%,
    100% {
        box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
        box-shadow: 0 2.5em 0 0;
    }
    }
`;

const Loader = (props) => {
    return (
        <Modal>
            <Styles>
                <div className="loader">
                </div>
            </Styles>
        </Modal>
    )
}

export default Loader;