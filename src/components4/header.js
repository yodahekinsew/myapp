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

class App extends Component {
  constructor() {
    super();
    this.state = {menuButtons:['home', 'portfolio', 'about', 'resume', 'contact'], pose:{logo:'notclick',home:'notclick',portfolio:'notclick',about:'notclick',resume:'notclick',contact:'notclick',}}
  }
  handleEnter = (tag) => {
    let menuIds = this.state.menuButtons;
    for (var i = 0; i < menuIds.length; i++) {
      if (menuIds[i] != tag) {
        let element = document.getElementById(menuIds[i]);
        element.style.opacity = '.6';
      }
    }
  }
  handleLeave = (tag) => {
    let menuIds = this.state.menuButtons;
    for (var i = 0; i < menuIds.length; i++) {
      if (menuIds[i] != tag) {
        let element = document.getElementById(menuIds[i]);
        element.style.opacity = '1';
      }
    }
  }
  render() {
    console.log(this.state.pose);
    return (
      <div style={{position:'absolute', display:'flex', height:'20vh', width:'100vw', overflow:'hidden', justifyContent:'center', alignItems:'center'}}>
        <Button id = 'home' pose = {this.state.pose.home} style={{opacity:'1', transition:'opacity .25s', position:'absolute', height:'3vh', width:'5vw', fontFamily:'verdana-bold', textAlign:'center', fontSize:'2.5vmin', color:'white', marginLeft:'12vw', marginTop:'-2vh'}}
        onMouseEnter={()=>{this.handleEnter('home');this.setState({pose:{home:'click'}})}}
        onMouseLeave={()=>{this.handleLeave('home');this.setState({pose:{home:'notclick'}})}}
        onClick={()=>{this.props.changeTab("home")}}>Home</Button>

        <Button id = 'portfolio' pose = {this.state.pose.portfolio} style={{opacity:'1', transition:'opacity .25s', position:'absolute', height:'3vh', width:'7vw', fontFamily:'verdana-bold', textAlign:'center', fontSize:'2.5vmin', color:'white', marginLeft:'20vw', marginTop:'-2vh'}}
        onMouseEnter={()=>{this.handleEnter('portfolio');this.setState({pose:{portfolio:'click'}})}}
        onMouseLeave={()=>{this.handleLeave('portfolio');this.setState({pose:{portfolio:'notclick'}})}}
        onClick={()=>{this.props.changeTab("portfolio")}}>Portfolio</Button>

        <Button id = 'about' pose = {this.state.pose.about} style={{opacity:'1', transition:'opacity .25s', position:'absolute', height:'3vh', width:'5vw', fontFamily:'verdana-bold', textAlign:'center', fontSize:'2.5vmin', color:'white', marginLeft:'28vw', marginTop:'-2vh'}}
        onMouseEnter={()=>{this.handleEnter('about');this.setState({pose:{about:'click'}})}}
        onMouseLeave={()=>{this.handleLeave('about');this.setState({pose:{about:'notclick'}})}}
        onClick={()=>{this.props.changeTab("about")}}>About</Button>

        <Button id = 'resume' pose = {this.state.pose.resume} style={{opacity:'1', transition:'opacity .25s', position:'absolute', height:'3vh', width:'6vw', fontFamily:'verdana-bold', textAlign:'center', fontSize:'2.5vmin', color:'white', marginLeft:'36vw', marginTop:'-2vh'}}
        onMouseEnter={()=>{this.handleEnter('resume');this.setState({pose:{resume:'click'}})}}
        onMouseLeave={()=>{this.handleLeave('resume');this.setState({pose:{resume:'notclick'}})}}
        onClick={()=>{this.props.changeTab("resume")}}>Resume</Button>

        <Button id = 'contact' pose = {this.state.pose.contact} style={{opacity:'1', transition:'opacity .25s', position:'absolute', height:'3vh', width:'6vw', fontFamily:'verdana-bold', textAlign:'center', fontSize:'2.5vmin', color:'white', marginLeft:'44vw', marginTop:'-2vh'}}
        onMouseEnter={()=>{this.handleEnter('contact');this.setState({pose:{contact:'click'}})}}
        onMouseLeave={()=>{this.handleLeave('contact');this.setState({pose:{contact:'notclick'}})}}
        onClick={()=>{this.props.changeTab("contact")}}>Contact</Button>

        <Button id ='logo' pose = {this.state.pose.logo} style={{transition:'background-color 1s color 1s', position:'absolute', height:'6vh', width:'4vw', outline:'solid 1px white', fontFamily:'verdana-bold', textAlign:'center', fontSize:'4vmin', color:'white', marginLeft:'-45vw', marginTop:'-2vh'}}
        onMouseEnter={()=>{let element = document.getElementById('logo');element.style.backgroundColor='white';element.style.color='black';this.setState({pose:{logo:'click'}})}}
        onMouseLeave={()=>{let element = document.getElementById('logo');element.style.backgroundColor='transparent';element.style.color='white';this.setState({pose:{logo:'notclick'}})}}
        onClick={()=>{this.props.changeTab("home")}}>YA</Button>
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
