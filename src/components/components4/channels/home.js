import React, { Component} from 'react';
import '../../../App.css';
import { connect } from 'react-redux';
import {changeChannel} from '../../../actions';
import TomJerry from '../../../homescreen.jpg';

const background = <img alt="" src={TomJerry} style={{height:'95%', width:'100%',position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>


class TvScreen extends Component {
  render() {
    return (
      <div style={{height:'100%', width:'100%'}}>
        {background}
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
