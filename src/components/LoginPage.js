import React from "react";
import { startLogin } from "../actions/auth";
import { connect } from "react-redux";

export class LoginPage extends React.Component {

    onLogin = () => {
        this.props.startLogin()
    }
    render() {
        return (
            <div>
                <button onClick={this.onLogin}>Login</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage);

