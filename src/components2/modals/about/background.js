import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeTab, changePose, changeNextPose} from '../../../actions';
import posed from "react-pose";
import styled from "styled-components";

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

const Box = posed.div({
  'start': {left:`-30%`, top:'55%'},
  'initial': {left:`-30%`, top:'55%'},
  'home': {left:`-30%`, top:'55%'},
  'aboutme': {left:({ left })=>`${left}%`, top:({ top })=>`${top}%`, fontSize:'50%', width:'25%'},
  'contactme': {left:`-30%`, top:'55%'},
  'hireme': {left:`-30%`, top:'55%'},
  'projects': {left:`-30%`, top:'55%'},
  'background': {left:`30%`, top:`0%`, fontSize:'85%', width:'40%'},
  'skills': {left:`-30%`, top:'55%'},
  'interests': {left:`-30%`, top:'55%'},
});

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {top: random(15,30), left: random(10,30)}
  }
  render() {
    return (
      <Box pose={this.props.pose} left={this.state.left} top={this.state.top} style={{justifyContent:'center', alignItems:'center', height:'15%', position:'absolute', fontFamily:'monospace', textAlign:'left'}}
      onClick={()=>{
        if (this.props.pose == 'background') {
          this.props.changePose('start')
          this.props.changeNextPose('aboutme')
        } else {
          this.props.changePose('start')
          this.props.changeNextPose('background')
        }
      }}
      onPoseComplete={()=>{
        this.setState({top: random(15,30), left: random(10,30)})
      }}>
        <b>My Background</b>
        {
          this.props.pose == 'aboutme'
          ?
          <p style={{fontSize:'45%'}}>My name is Yodahe Alemu and have I got a story to tell.</p>
          :
          this.props.pose == 'background'
          ?
          <p style={{fontSize:'30%'}}>Hello! My name is Yodahe!<br/><br/>I am an Ethiopian from Aurora, Colorado. My culture is everything to me and makes up a big part of who I am and how I want to impact the world.<br/><br/>I am currently a sophomore at MIT (Massachusetts Institute of Technology) studying Computer Science and also concentrating in Design and Comparative Media Studies.<br/><br/>I'm currently doing research with the Viral Communications group at the MIT Media Lab.<br/><br/>When I'm not in class or doing research,I'm either working on MIT's fashion magazine - The INFINITE, dancing with MIT's DanceTroupe, or working on my own personal projects!</p>
          :
          null
        }
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.newState.tab,
    pose: state.newState.pose,
    next_pose: state.newState.next_pose
  }
}

const mapActionsToProps = {changeTab, changePose, changeNextPose}

export default connect(mapStateToProps, mapActionsToProps)(AboutMe)
