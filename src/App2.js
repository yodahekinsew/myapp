import React, { Component} from 'react';
import './App.css';
import Opening from './components/opening.js';
import { connect } from 'react-redux';
import {changeTab} from './actions';
import AppPage from './components2/apppage.js';

class App extends Component {
  render() {
    return (
      <div style={{height:'100vh', width:'100vw', backgroundColor:'white', position:'relative'}}>
        <AppPage/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showOptions: state.newState.showOptions,
  }
}

const mapActionsToProps = {changeTab}

export default connect(mapStateToProps, mapActionsToProps)(App)
