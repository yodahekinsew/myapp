import React, { Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import {changeChannel} from './actions';
import AppPage from './components5/apppage.js';

class App extends Component {
  render() {
    return (
      <AppPage/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channel: state.newState.channel,
  }
}

const mapActionsToProps = {changeChannel}

export default connect(mapStateToProps, mapActionsToProps)(App)
