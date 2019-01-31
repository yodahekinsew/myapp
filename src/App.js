import React, { Component} from 'react';
import './App.css';
import Home from './components/homepage.js';
import AboutMe from './components/aboutMe.js';
import CoolStuff from './components/coolStuff.js';
import HireMe from './components/hireMe.js';
import { connect } from 'react-redux';
import {changeTab} from './actions';

class App extends Component {
  render() {
    return (
      <div>
        {
          this.props.tab === 'home'
          ?
          <Home id='home'/>
          :
          this.props.tab === 'aboutMe'
          ?
          <AboutMe id='aboutme'/>
          :
          this.props.tab === 'coolStuff'
          ?
          <CoolStuff id='coolstuff'/>
          :
          <HireMe id='hireme'/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.newState.tab,
  }
}

const mapActionsToProps = {changeTab}

export default connect(mapStateToProps, mapActionsToProps)(App)
