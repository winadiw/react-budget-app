import React from "react";
import { startLogin } from "../actions/auth";
import { connect } from "react-redux";

export class LoginPage extends React.Component {
  onLogin = () => {
    this.props.startLogin();
  };
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify</h1>
          <p>It's time to get your expenses under control.</p>
          <button onClick={this.onLogin} className="button">Login with Google</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin()),
  };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
