import React, { Component} from 'react';
import '../../../App.css';
import { connect } from 'react-redux';
import {changeChannel} from '../../../actions';
import TomJerry from '../../../scoobyDoo.jpg';

const background = <img alt="" src={TomJerry} style={{height:'100%', width:'100%', marginLeft:'2vw', position:'absolute', backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>


class TvScreen extends Component {
  render() {
    return (
      <div>
      {background}
      {
        this.props.selection == 1
        ?
        <header style={{position:'absolute', color:'black', marginTop:'11vh', marginLeft:'9.5vw', opacity:'.5', fontSize:'4vmin', fontFamily:'verdana-bold'}}>SoundClout FreeSpeech OtherSide</header>
        :
        this.props.selection == 2
        ?
        <header style={{position:'absolute', color:'black', marginTop:'11vh', marginLeft:'9.5vw', opacity:'.5', fontSize:'4vmin', fontFamily:'verdana-bold'}}>SoundClout FreeSpeech OtherSide</header>
        :
        this.props.selection == 3
        ?
        <header style={{position:'absolute', color:'black', marginTop:'11vh', marginLeft:'9.5vw', opacity:'.5', fontSize:'4vmin', fontFamily:'verdana-bold'}}>SoundClout FreeSpeech OtherSide</header>
        :
        null
      }
      {
        this.props.selection == 1
        ?
        <header style={{position:'absolute', color:'white', marginTop:'10vh', marginLeft:'10vw', fontSize:'4vmin', fontFamily:'verdana-bold'}}>SoundClout <span style={{opacity:'.7'}}>FreeSpeech OtherSide</span></header>
        :
        this.props.selection == 2
        ?
        <header style={{position:'absolute', color:'white', marginTop:'10vh', marginLeft:'10vw', fontSize:'4vmin', fontFamily:'verdana-bold'}}><span style={{opacity:'.7'}}>SoundClout</span> FreeSpeech <span style={{opacity:'.7'}}>OtherSide</span></header>
        :
        this.props.selection == 3
        ?
        <header style={{position:'absolute', color:'white', marginTop:'10vh', marginLeft:'10vw', fontSize:'4vmin', fontFamily:'verdana-bold'}}><span style={{opacity:'.7'}}>SoundClout FreeSpeech</span> OtherSide</header>
        :
        null
      }
      {
        this.props.selection == 1
        ?
        <div style={{position:'absolute', color:'black', opacity:'.7', marginLeft:'9.75vw', marginTop:'25.5vh', fontSize:'2vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>In Development...</div>
        :
        this.props.selection == 2
        ?
        <div style={{position:'absolute', color:'black', opacity:'.7', marginLeft:'9.75vw', marginTop:'25.5vh', fontSize:'2vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>In Development...</div>
        :
        this.props.selection == 3
        ?
        <div style={{position:'absolute', color:'black', opacity:'.7', marginLeft:'9.75vw', marginTop:'25.5vh', fontSize:'2vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>In Development...</div>
        :
        null
      }
      {
        this.props.selection == 1
        ?
        <div style={{position:'absolute', color:'white', marginLeft:'10vw', marginTop:'25vh', fontSize:'2vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>In Development...</div>
        :
        this.props.selection == 2
        ?
        <div style={{position:'absolute', color:'white', marginLeft:'10vw', marginTop:'25vh', fontSize:'2vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>In Development...</div>
        :
        this.props.selection == 3
        ?
        <div style={{position:'absolute', color:'white', marginLeft:'10vw', marginTop:'25vh', fontSize:'2vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>In Development...</div>
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
