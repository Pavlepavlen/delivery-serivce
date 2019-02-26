import React, { Fragment, Component } from "react";

import Modal from "../Modal/Modal";


const WithErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {

        state = {
            error: null
        }

        componentWillMount () {
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                });
                return req;
            });

            this.responceInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responceInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            })
        }

        render () {
            return (
            <Fragment>
                <Modal show={this.state.error}>
                    {this.state.error ? <p style={{textAlign: "center"}}>Something went wrong</p> : null}
                    <button style={{display: "block", margin: "20px auto"}} onClick={this.errorConfirmedHandler}>Ok</button>
                </Modal>
                <WrappedComponent {...this.props} />
            </Fragment>
        );
        }
    }
}

export default WithErrorHandler;