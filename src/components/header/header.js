import React, { Component } from 'react'
import './header.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <img src={this.props.logo} className="app-logo" alt="logo" />
        <h1 className="app-title">{this.props.appTitle}</h1>
      </header>
    )
  }
}

Header.propTypes = {
  appTitle: PropTypes.string,
  logo: PropTypes.string,
}
Header.defaultProps = {
  appTitle: 'App name goes here'
};

const mapStateToProps = state => ({
  logo: state.logo,
  appTitle: state.appTitle
})

export default connect(mapStateToProps)(Header)