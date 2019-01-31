import React, { Component} from 'react';
import '../App.css';
import IconImage from '../img/soundclout_icon.png';
import { connect } from 'react-redux';
import {changeTab} from '../actions';

const SoundCloutIcon = <img alt="" src={IconImage} style={{height:'15vh',width:'80vw', marginLeft:'5vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class SoundCloutInfo extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#a2a2a2', height:'100vh', width:'100vw'}}>
        {SoundCloutIcon}
        <div style={{marginLeft:'10vw', paddingTop:'20vh', fontSize:'5vmin'}}>
          <pre style={{backgroundColor:'white', height:'70vh', width:'70vw'}}>
            In Development...
          </pre>
        </div>
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

export default connect(mapStateToProps, mapActionsToProps)(SoundCloutInfo)
