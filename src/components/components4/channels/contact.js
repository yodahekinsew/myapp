import React, { Component} from 'react';
import '../../../App.css';
import { connect } from 'react-redux';
import {changeChannel} from '../../../actions';
import TomJerry from '../../../loonyTunes.jpeg';

const background = <img alt="" src={TomJerry} style={{height:'94%', width:'93%', marginLeft:'4%', marginTop:'3%', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>



class TvScreen extends Component {
  render() {
    return (
      <div>
      {background}
      <header style={{position:'absolute', color:'black', opacity:'.7', paddingTop:'10.5vh', marginLeft:'9.5vw', fontSize:'4vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>
      Email:{'\n'}yodahekinsew@gmail.com {'\n'}{'\n'}Github:{'\n'}github.com/yodahekinsew{'\n'}{'\n'}LinkedIn:{'\n'}linkedin.com/in/yodahe-alemu/</header>
      <header style={{position:'absolute', color:'white', paddingTop:'10vh', marginLeft:'10vw', fontSize:'4vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>
      Email:{'\n'}yodahekinsew@gmail.com {'\n'}{'\n'}Github:{'\n'}github.com/yodahekinsew{'\n'}{'\n'}LinkedIn:{'\n'}linkedin.com/in/yodahe-alemu/</header>
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

export default connect(mapStateToProps, mapActionsToProps)(TvScreen)
