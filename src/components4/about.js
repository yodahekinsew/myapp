import React, { Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {changeTab} from '../actions';
import posed from "react-pose";
import styled from "styled-components";

const Background = posed.div({
  'click': {width:'87vw'},
  'notclick': {width:'25vw'},
});

const Skills = posed.div({
  'click': {width:'87vw'},
  'notclick': {width:'25vw'},
});

const Interests = posed.div({
  'click': {width:'87vw'},
  'notclick': {width:'25vw'},
});

class App extends Component {
  constructor() {
    super();
    this.state = {menuButtons:['background', 'skills', 'interests'],pose:{background:'notclick',skills:'notclick',interests:'notclick'}}
  }

  componentDidMount() {
    let element = document.getElementById('fade')
    element.style.opacity = '1'
  }

  handleEnter = (tag) => {
    let element = document.getElementById(tag);
    element.style.backgroundColor = 'white';
    element.style.color = 'black';
    element.parentNode.style.zIndex = '2';
    let menuIds = this.state.menuButtons;
    for (var i = 0; i < menuIds.length; i++) {
      if (menuIds[i] != tag) {
        let element = document.getElementById(menuIds[i]);
        element.children[0].style.opacity = '0';
      }
    }
  }

  handleLeave = (tag) => {
    let element = document.getElementById(tag);
    element.style.backgroundColor = 'rgba(0,0,0,.4)';
    element.style.color = 'white';
    element.parentNode.zIndex = '1';
    let menuIds = this.state.menuButtons;
    for (var i = 0; i < menuIds.length; i++) {
      if (menuIds[i] != tag) {
        let element = document.getElementById(menuIds[i]);
        element.children[0].style.opacity = '1';
      }
    }
  }

  render() {
    return (
      <div id = 'fade' style={{opacity:'0', position:'absolute', transition:'opacity 1s', display:'flex', flexDirection:'row', height:'85vh', marginTop:'15vh', width:'100vw', overflow:'hidden', justifyContent:'center', alignItems:'center'}}>
        <Background id='background' pose={this.state.pose.background} style={{backgroundColor:'rgba(0,0,0,.4)', transition:'width .5s, opacity .5s, background-color .5s, color .5s', height:'80vh', margin:'3vh', color:'white', outline:'solid 1px white', whiteSpace:'pre-wrap', fontFamily:'verdana-bold', fontSize:'5vmin', textAlign:'center'}}
        onMouseEnter={()=>{this.handleEnter('background');this.setState({pose:{background:'click',skills:'notclick',interests:'notclick'}})}}
        onMouseLeave={()=>{this.handleLeave('background');this.setState({pose:{background:'notclick',skills:'notclick',interests:'notclick'}})}}>
        <div/>
        {
          this.state.pose.background == 'notclick'
          ?
          <div style={{height:'100%', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>The Things{'\n'}I Have Do</div>
          :
          "The Things I Have Done"
        }
        </Background>
        <Skills id='skills' pose={this.state.pose.skills} style={{backgroundColor:'rgba(0,0,0,.4)', transition:'width .5s, opacity .5s, background-color .5s, color .5s', height:'80vh', margin:'3vh', color:'white', outline:'solid 1px white', whiteSpace:'pre-wrap', fontFamily:'verdana-bold', fontSize:'5vmin',textAlign:'center'}}
        onMouseEnter={()=>{this.handleEnter('skills');this.setState({pose:{background:'notclick',skills:'click',interests:'notclick'}})}}
        onMouseLeave={()=>{this.handleLeave('skills');this.setState({pose:{background:'notclick',skills:'notclick',interests:'notclick'}})}}>
        <div/>
        {
          this.state.pose.skills == 'notclick'
          ?
          <div style={{height:'100%', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>The Things{'\n'}I Can Do</div>
          :
          "The Things I Can Do"
        }
        </Skills>
        <Interests id='interests' pose={this.state.pose.interests} style={{backgroundColor:'rgba(0,0,0,.4)', transition:'width .5s, opacity .5s, background-color .5s, color .5s', height:'80vh', margin:'3vh', color:'white', outline:'solid 1px white', whiteSpace:'pre-wrap', fontFamily:'verdana-bold', fontSize:'5vmin', textAlign:'center'}}
        onMouseEnter={()=>{this.handleEnter('interests');this.setState({pose:{background:'notclick',skills:'notclick',interests:'click'}})}}
        onMouseLeave={()=>{this.handleLeave('interests');this.setState({pose:{background:'notclick',skills:'notclick',interests:'notclick'}})}}>
        <div/>
        {
          this.state.pose.interests == 'notclick'
          ?
          <div style={{height:'100%', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>The Things{'\n'}I Want to Do</div>
          :
          "The Things I Want to Do"
        }
        </Interests>
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
