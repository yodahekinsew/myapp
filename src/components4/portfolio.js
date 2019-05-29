import React, { Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {changeTab} from '../actions';
import posed from "react-pose";
import styled from "styled-components";

const Button = posed.div({
  'click': {scale:'1.5'},
  'notclick': {scale:'1'},
});

const SoundClout = posed.div({
  'click': {height:'100vw'},
  'notclick': {height:'30vw'},
});

const FreeSpeech = posed.div({
  'click': {height:'100vw'},
  'notclick': {height:'30vw'},
});

const OtherSide = posed.div({
  'click': {height:'100vw'},
  'notclick': {height:'30vw'},
});

const FadeIn = posed.div({
  'unmounted': {opacity:'0'},
  'mounted': {opacity:'1'},
});

class App extends Component {
  constructor() {
    super();
    this.state = {menuIds:['soundclout', 'freespeech', 'otherside'], pose:{soundclout:'notclick', freespeech:'notclick', otherside:'notclick'}}
  }

  handleEnter = (tag) => {
    let element = document.getElementById(tag);
    element.style.backgroundColor = 'white';
    element.style.color = 'black';
    element.parentNode.style.zIndex = '2';
    let menuIds = this.state.menuIds;
    for (var i = 0; i < menuIds.length; i++) {
      if (menuIds[i] != tag) {
        let element = document.getElementById(menuIds[i]);
        element.children[0].style.opacity = '0';
      }
    }
  }

  handleLeave = (tag) => {
    let element = document.getElementById(tag);
    element.style.backgroundColor = 'transparent';
    element.style.color = 'white';
    element.parentNode.zIndex = '1';
    let menuIds = this.state.menuIds;
    for (var i = 0; i < menuIds.length; i++) {
      if (menuIds[i] != tag) {
        let element = document.getElementById(menuIds[i]);
        element.children[0].style.opacity = '1';
      }
    }
  }

  componentDidMount() {
    let element = document.getElementById('fade')
    console.log(element)
    element.style.opacity = '1'
  }

  render() {
    return (
      <FadeIn id = 'fade' style={{opacity:'0', position:'absolute', transition:'opacity 1s', display:'flex', flexDirection:'column', height:'85vh', marginTop:'15vh', width:'100vw', overflow:'hidden', justifyContent:'center', alignItems:'center'}}>
        <SoundClout id='soundclout' pose={this.state.pose.soundclout} style={{transition:'background-color .5s, color .5s, height .5s', backgroundColor:'rgba(0,0,0,.4)', fontFamily:'verdana-bold', outline:'solid 1px white', fontSize:'5vmin', width:'90vw', margin:'2vh', paddingLeft:'2vw', textAlign:'left', color:'white', whiteSpace:'pre-wrap'}}
        onMouseEnter={()=>{this.handleEnter('soundclout');this.setState({pose:{soundclout:'click'}})}}
        onMouseLeave={()=>{this.handleLeave('soundclout');this.setState({pose:{soundclout:'notclick',freespeech:'notclick',otherside:'notclick'}})}}>
          <div>The P3N
          {
            this.state.pose.soundclout=='click'
            ?
            '\n\n\tBuilt and designed a 3D drawing tool, which we named the P3N. The entire system used a microcontroller device, a website renderer built with Three.js, and a SQLite python-based server. The system allowed users to draw in 3D - either alone or collaboritvely with other users - and gave users control over certain aspects of their drawing expericene, such as pen size, drawing speed, pen color, and others. The device used a microphone sensor to receive commands from the user and an IMU for directional input from the user.'
            :
            null
          }</div>
        </SoundClout>
        <FreeSpeech id='freespeech' pose={this.state.pose.freespeech} style={{transition:'background-color .5s, color .5s, height .5s', backgroundColor:'rgba(0,0,0,.4)', fontFamily:'verdana-bold', outline:'solid 1px white', fontSize:'5vmin', width:'90vw', margin:'2vh', paddingLeft:'2vw', textAlign:'left', color:'white', whiteSpace:'pre-wrap'}}
        onMouseEnter={()=>{this.handleEnter('freespeech');this.setState({pose:{freespeech:'click'}})}}
        onMouseLeave={()=>{this.handleLeave('freespeech');this.setState({pose:{soundclout:'notclick',freespeech:'notclick',otherside:'notclick'}})}}>
          <div>Crossword Puzzle
          {
            this.state.pose.freespeech=='click'
            ?
            '\n\n\tBuilt from ground up a software system that allowed multiple users to select ongoing crossword puzzle games from a server, which we also created, and play in realtime against other users. The software was written entirely in Java and uses a web-based server. '
            :
            null
          }</div>
        </FreeSpeech>
        {/* <OtherSide id='otherside' pose={this.state.pose.otherside} style={{transition:'background-color .5s, color .5s, height .5s', backgroundColor:'rgba(0,0,0,.4)', fontFamily:'verdana-bold', outline:'solid 1px white', fontSize:'5vmin', width:'90vw', margin:'2vh', paddingLeft:'2vw', textAlign:'left', color:'white', whiteSpace:'pre-wrap'}}
        onMouseEnter={()=>{this.handleEnter('otherside');this.setState({pose:{otherside:'click'}})}}
        onMouseLeave={()=>{this.handleLeave('otherside');this.setState({pose:{soundclout:'notclick',freespeech:'notclick',otherside:'notclick'}})}}>
          <div>OtherSide
          {
            this.state.pose.otherside=='click'
            ?
            '\n\n\tIn Development...'
            :
            null
          }</div>
        </OtherSide> */}
      </FadeIn>
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
