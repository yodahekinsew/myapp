import React, { Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {changeTab} from '../actions';
import posed from "react-pose";
import styled from "styled-components";

const Button = posed.div({
  'click': {scale:'1.2'},
  'notclick': {scale:'1'},
});

const FadeIn = posed.div({
  'unmounted': {opacity:'0'},
  'mounted': {opacity:'1'},
});

class App extends Component {
  constructor() {
    super();
    this.state = {pose:{resume:'notclick',contact:'notclick'}}
  }

  componentDidMount() {
    let element = document.getElementById('fade')
    console.log(element)
    element.style.opacity = '1'
  }

  handleEnter = (tag) => {
    let element = document.getElementById(tag);
    element.style.backgroundColor = 'white';
    element.style.color = 'black';
  }

  handleLeave = (tag) => {
    let element = document.getElementById(tag);
    element.style.backgroundColor = 'transparent';
    element.style.color = 'white';
  }

  render() {
    return (
      <FadeIn id = 'fade' style={{opacity:'0', position:'absolute', transition:'opacity 1s', display:'flex', height:'85vh', marginTop:'15vh', width:'100vw', overflow:'hidden', justifyContent:'center', alignItems:'center'}}>
        <Button id='resumeB' pose = {this.state.pose.resume} style={{position:'absolute', height:'8vh', width:'13vw', outline:'solid 1px white', fontFamily:'verdana-bold', textAlign:'center', fontSize:'5vmin', color:'white', marginLeft:'-9vw', marginTop:'0vh'}}
        onMouseEnter={()=>{this.handleEnter('resumeB');this.setState({pose:{resume:'click'}})}}
        onMouseLeave={()=>{this.handleLeave('resumeB');this.setState({pose:{resume:'notclick'}})}}
        onClick={()=>{this.props.changeTab("resume")}}>Resume</Button>
        <Button id='contactB' pose = {this.state.pose.contact} style={{position:'absolute', height:'8vh', width:'13vw', outline:'solid 1px white', fontFamily:'verdana-bold', textAlign:'center', fontSize:'5vmin', color:'white', marginLeft:'9vw', marginTop:'0vh'}}
        onMouseEnter={()=>{this.handleEnter('contactB');this.setState({pose:{contact:'click'}})}}
        onMouseLeave={()=>{this.handleLeave('contactB');this.setState({pose:{contact:'notclick'}})}}
        onClick={()=>{this.props.changeTab("contact")}}>Contact</Button>
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
