import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeTab, changePose, changeNextPose} from '../../../actions';
import posed from "react-pose";
import styled from "styled-components";

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

const Box = posed.div({
  'start': {left:`-30%`, top:'25%'},
  'initial': {left:`-30%`, top:'25%'},
  'aboutme': {left:`35%`, top:`0%`, fontSize:'85%'},
  'home': {left:({ left })=>`${left}%`, top:({ top })=>`${top}%`, fontSize:'50%'},
  'contactme': {left:`-30%`, top:'25%'},
  'hireme': {left:`-30%`, top:'25%'},
  'projects': {left:`-30%`, top:'25%'},
  'background': {left:`-30%`, top:'25%'},
  'skills': {left:`-30%`, top:'25%'},
  'interests': {left:`-30%`, top:'25%'},
  'blog': {left:'-30%', top:'25%'}
});

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {top: random(15,30), left: random(10,30)}
  }
  render() {
    return (
      <Box pose={this.props.pose} left={this.state.left} top={this.state.top} style={{justifyContent:'center', alignItems:'center', height:'15%',width:'25%', position:'absolute', fontFamily:'monospace', textAlign:'center'}}
      onClick={()=>{
        if (this.props.pose == 'aboutme') {
          this.props.changePose('start')
          this.props.changeNextPose('home')
        } else {
          this.props.changePose('start')
          this.props.changeNextPose('aboutme')
        }
      }}
      onPoseComplete={()=>{
        this.setState({top: random(15,30), left: random(10,30)})
      }}>
        <b>About Me</b>
        {
          this.props.pose == 'home'
          ?
          <p style={{fontSize:'45%'}}>I meannnnn... you came here<br />to learn about me, didn't you?</p>
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
