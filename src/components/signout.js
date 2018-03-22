import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';

class SignOut extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <div>You have signed out</div>;
  }
}

export default connect(null, { logout })(SignOut);
