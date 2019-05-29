import React, { Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {changeTab} from '../actions';
import posed from "react-pose";
import styled from "styled-components";

const Button = posed.div({
  'click': {scale:'1.1'},
  'notclick': {scale:'1'},
});

const FadeIn = posed.div({
  'unmounted': {opacity:'0'},
  'mounted': {opacity:'1'},
});

class App extends Component {
  constructor() {
    super();
    this.state = {pose:{email:'notclick',facebook:'notclick',github:'notclick',twitter:'notclick',linkedIn:'notclick',website:'notclick',}}
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
      <FadeIn id = 'fade' style={{opacity:'0', position:'absolute', transition:'opacity 1s', display:'flex', flexDirection:'row', height:'85vh', marginTop:'15vh', width:'100vw', overflow:'hidden', justifyContent:'center', alignItems:'center'}}>
        <div style={{display:'flex', flexDirection:'column', fontFamily:'verdana-bold', fontSize:'5vmin', height:'80vh', width:'25vw', margin:'5vh'}}>
          <a style={{textDecoration:'none'}} href="mailto:yodahekinsew@gmail.com">
            <Button id='email' pose={this.state.pose.email} style={{transition:'background-color 1s color 1s', backgroundColor:'rgba(0,0,0,.4)', display:'flex', justifyContent:'center', alignItems:'center', height:'30vh', width:'25vw', margin:'5vh', outline:'solid 1px white', color:'white'}}
            onMouseEnter={()=>{this.handleEnter('email');this.setState({pose:{email:'click'}})}}
            onMouseLeave={()=>{this.handleLeave('email');this.setState({pose:{email:'notclick'}})}}>
            Email
            </Button>
          </a>
          <a style={{textDecoration:'none'}} href="https://www.facebook.com/yod.alemu">
            <Button id='facebook' pose={this.state.pose.facebook} style={{transition:'background-color 1s color 1s', backgroundColor:'rgba(0,0,0,.4)', display:'flex', justifyContent:'center', alignItems:'center', height:'30vh', width:'25vw', margin:'5vh', outline:'solid 1px white', color:'white'}}
            onMouseEnter={()=>{this.handleEnter('facebook');this.setState({pose:{facebook:'click'}})}}
            onMouseLeave={()=>{this.handleLeave('facebook');this.setState({pose:{facebook:'notclick'}})}}>
            Facebook
            </Button>
          </a>
        </div>

        <div style={{display:'flex', flexDirection:'column', fontFamily:'verdana-bold', fontSize:'5vmin', height:'80vh', width:'25vw', margin:'5vh', color:'white'}}>
          <a style={{textDecoration:'none'}} href="https://github.com/yodahekinsew">
            <Button id='github' pose={this.state.pose.github} style={{transition:'background-color 1s color 1s', backgroundColor:'rgba(0,0,0,.4)', display:'flex', justifyContent:'center', alignItems:'center', height:'30vh', width:'25vw', margin:'5vh', outline:'solid 1px white', color:'white'}}
            onMouseEnter={()=>{this.handleEnter('github');this.setState({pose:{github:'click'}})}}
            onMouseLeave={()=>{this.handleLeave('github');this.setState({pose:{github:'notclick'}})}}>
            Github
            </Button>
          </a>
          <a style={{textDecoration:'none'}} href="https://twitter.com/KungFuKinsew">
            <Button id='twitter' pose={this.state.pose.twitter} style={{transition:'background-color 1s color 1s', backgroundColor:'rgba(0,0,0,.4)', display:'flex', justifyContent:'center', alignItems:'center', height:'30vh', width:'25vw', margin:'5vh', outline:'solid 1px white', color:'white'}}
            onMouseEnter={()=>{this.handleEnter('twitter');this.setState({pose:{twitter:'click'}})}}
            onMouseLeave={()=>{this.handleLeave('twitter');this.setState({pose:{twitter:'notclick'}})}}>
            Twitter
            </Button>
          </a>
        </div>

        <div style={{display:'flex', flexDirection:'column', fontFamily:'verdana-bold', fontSize:'5vmin', height:'80vh', width:'25vw', margin:'5vh', color:'white'}}>
          <a style={{textDecoration:'none'}} href="https://www.linkedin.com/in/yodahe-alemu/">
            <Button id='linkedIn' pose={this.state.pose.linkedIn} style={{transition:'background-color 1s color 1s', backgroundColor:'rgba(0,0,0,.4)', display:'flex', justifyContent:'center', alignItems:'center', height:'30vh', width:'25vw', margin:'5vh', outline:'solid 1px white', color:'white'}}
            onMouseEnter={()=>{this.handleEnter('linkedIn');this.setState({pose:{linkedIn:'click'}})}}
            onMouseLeave={()=>{this.handleLeave('linkedIn');this.setState({pose:{linkedIn:'notclick'}})}}>
            LinkedIn
            </Button>
          </a>
          <a style={{textDecoration:'none'}} href="https://yodahekinsew.github.io/myapp/">
            <Button id='website' pose={this.state.pose.website} style={{transition:'background-color 1s color 1s', backgroundColor:'rgba(0,0,0,.4)', display:'flex', justifyContent:'center', alignItems:'center', height:'30vh', width:'25vw', margin:'5vh', outline:'solid 1px white', color:'white'}}
            onMouseEnter={()=>{this.handleEnter('website');this.setState({pose:{website:'click'}})}}
            onMouseLeave={()=>{this.handleLeave('website');this.setState({pose:{website:'notclick'}})}}>
            Website
            </Button>
          </a>
        </div>
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
