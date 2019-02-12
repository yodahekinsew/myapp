import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeTab, changePose, changeNextPose} from '../../../actions';
import posed from "react-pose";
import styled from "styled-components";

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

const Box = posed.div({
  'start': {left:`60%`, top:'100%'},
  'initial': {left:`60%`, top:'100%'},
  'home': {left:`60%`, top:'100%'},
  'aboutme': {left:({ left })=>`${left}%`, top:({ top })=>`${top}%`, fontSize:'50%', width:'25%'},
  'contactme': {left:`60%`, top:'100%'},
  'hireme': {left:`60%`, top:'100%'},
  'projects': {left:`60%`, top:'100%'},
  'skills': {left:`60%`, top:'100%'},
  'interests': {left:`35%`, top:`0%`, fontSize:'85%', width:'40%'},
  'background': {left:`60%`, top:'100%'},
});

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {top: random(50,80), left: random(10,30)}
  }
  render() {
    return (
      <Box pose={this.props.pose} left={this.state.left} top={this.state.top} style={{justifyContent:'center', alignItems:'center', height:'15%', position:'absolute', fontFamily:'monospace', textAlign:'left'}}
      onClick={()=>{
        if (this.props.pose == 'interests') {
          this.props.changePose('start')
          this.props.changeNextPose('aboutme')
        } else {
          this.props.changePose('start')
          this.props.changeNextPose('interests')
        }
      }}
      onPoseComplete={()=>{
        this.setState({top: random(50,80), left: random(10,30)})
      }}>
        <b>My Interests</b>
        {
          this.props.pose == 'aboutme'
          ?
          <p style={{fontSize:'45%'}}>I have a lot of different interests</p>
          :
          this.props.pose == "interests"
          ?
          <p style={{fontSize:'30%', whiteSpace: "pre-wrap"}}>{'\n'}I am interested in:{"\n"}{"\t"}UI/UX{"\n"}{"\t"}Artifical Intelligence{"\n"}{"\t"}Social Technology</p>
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
