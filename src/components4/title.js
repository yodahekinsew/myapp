import React, { Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {changeTab} from '../actions';
import posed from "react-pose";
import styled from "styled-components";

const Header = posed.div({
  'home': {marginTop: '30vh', marginLeft:'25vw', scale: '1'},
  'portfolio': {marginTop: '-2vh', marginLeft:'0vw', scale: '.7'},
  'about': {marginTop: '-2vh', marginLeft:'0vw', scale: '.7'},
  'resume': {marginTop: '-2vh', marginLeft:'0vw', scale: '.7'},
  'contact': {marginTop: '-2vh', marginLeft:'0vw', scale: '.7'},
});

class App extends Component {
  constructor() {
    super();
    this.state = {pose:'notclick'}
  }
  render() {
    return (
      <Header pose = {this.props.tab} onClick={()=>{this.props.changeTab('home')}} style={{position:'absolute', display:'flex', height:'20vh', width:'50vw', overflow:'hidden', justifyContent:'center',}}>
        <div style={{position:'absolute', fontFamily:'verdana-bold', fontSize:'10vmin', color:'white'}}>Yodahe Alemu</div>
        <div style={{position:'absolute', fontFamily:'verdana-bold', fontSize:'5vmin', color:'white', marginTop:'12vh'}}>People | Software | Design</div>
      </Header>
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
