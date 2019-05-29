import React, { Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import {changeChannel} from './actions';
import Background from './tv3.png';
import MenuBox from './components/components4/menubox.js';
import TvScreen from './components/components4/tvscreen.js';
import Selector from './components/components4/selector.js';

const background = <img alt="" src={Background} style={{height:'100vh', position:'absolute', width:'100vw',position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class App extends Component {
  render() {
    return (
      <div style={{position:'relative', height:'100vh', width:'100vw',position:'relative', overflow:'hidden'}}>
        <TvScreen/>
        {background}
        <MenuBox/>
        <Selector/>
      </div>
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
