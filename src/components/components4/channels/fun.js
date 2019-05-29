import React, { Component} from 'react';
import '../../../App.css';
import { connect } from 'react-redux';
import {changeChannel} from '../../../actions';
import MemeSwitcher from '../meme_switcher.js';
import TomJerry from '../../../loonyTunes.jpeg';

const background = <img alt="" src={TomJerry} style={{height:'100%', width:'100%', marginTop:'4%', marginLeft:'2%', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class TvScreen extends Component {
  render() {
    return (
      <div style={{position:'relative', height:'95vh', width:'70vw', }}>
      {background}
      {
        this.props.selection == 1
        ?
        <header style={{position:'absolute', color:'black', marginTop:'11vh', marginLeft:'9.5vw', opacity:'.5', fontSize:'4vmin', fontFamily:'verdana-bold'}}>Funny Shit Cool Shit Dumb Shit</header>
        :
        this.props.selection == 2
        ?
        <header style={{position:'absolute', color:'black', marginTop:'11vh', marginLeft:'9.5vw', opacity:'.5', fontSize:'4vmin', fontFamily:'verdana-bold'}}>Funny Shit Cool Shit Dumb Shit</header>
        :
        this.props.selection == 3
        ?
        <header style={{position:'absolute', color:'black', marginTop:'11vh', marginLeft:'9.5vw', opacity:'.5', fontSize:'4vmin', fontFamily:'verdana-bold'}}>Funny Shit Cool Shit Dumb Shit</header>
        :
        null
      }
      {
        this.props.selection == 1
        ?
        <header style={{position:'absolute', color:'white', textShadow:'-1px -1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000, 1px 1px 0 #000', marginTop:'10vh', marginLeft:'10vw', fontSize:'4vmin', fontFamily:'verdana-bold'}}>Funny Shit <span style={{opacity:'.7'}}>Cool Shit Dumb Shit</span></header>
        :
        this.props.selection == 2
        ?
        <header style={{position:'absolute', color:'white', textShadow:'-1px -1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000, 1px 1px 0 #000', marginTop:'10vh', marginLeft:'10vw', fontSize:'4vmin', fontFamily:'verdana-bold'}}><span style={{opacity:'.7'}}>Funny Shit</span> Cool Shit <span style={{opacity:'.7'}}>Dumb Shit</span></header>
        :
        this.props.selection == 3
        ?
        <header style={{position:'absolute', color:'white', textShadow:'-1px -1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000, 1px 1px 0 #000', marginTop:'10vh', marginLeft:'10vw', fontSize:'4vmin', fontFamily:'verdana-bold'}}><span style={{opacity:'.7'}}>Funny Shit Cool Shit</span> Dumb Shit</header>
        :
        null
      }

      {
        this.props.selection == 1
        ?
        null
        :
        this.props.selection == 2
        ?
        null
        :
        this.props.selection == 3
        ?
        null
        :
        null
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channel: state.newState.channel,
    selection: state.newState.selection,
  }
}

const mapActionsToProps = {changeChannel}

export default connect(mapStateToProps, mapActionsToProps)(TvScreen)
