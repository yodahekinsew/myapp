import React, { Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {changeTab} from '../actions';

class App extends Component {
  render() {
    return (
      <div onClick={this.props.func} style={this.props.style}>
        <header style={{color:'white'}}>{this.props.text}</header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.newState.tab,
    menuButton: state.newState.menuButton,
  }
}

const mapActionsToProps = {changeTab}

export default connect(mapStateToProps, mapActionsToProps)(App)
