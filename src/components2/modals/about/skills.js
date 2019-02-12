import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeTab, changePose, changeNextPose} from '../../../actions';
import posed from "react-pose";
import styled from "styled-components";

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

const Box = posed.div({
  'start': {left:`100%`, top:'60%'},
  'initial': {left:`100%`, top:'60%'},
  'home': {left:`100%`, top:'60%'},
  'aboutme': {left:({ left })=>`${left}%`, top:({ top })=>`${top}%`, fontSize:'50%', width:'25%'},
  'contactme': {left:`100%`, top:'60%'},
  'hireme': {left:`100%`, top:'60%'},
  'projects': {left:`100%`, top:'60%'},
  'background': {left:`100%`, top:'60%'},
  'skills': {left:`35%`, top:`0%`, fontSize:'85%', width:'35%'},
  'interests': {left:`100%`, top:'60%'},
});

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {top: random(20,70), left: random(60,70)}
  }
  render() {
    return (
      <Box pose={this.props.pose} left={this.state.left} top={this.state.top} style={{justifyContent:'center', alignItems:'center', height:'15%', position:'absolute', fontFamily:'monospace', textAlign:'left'}}
      onClick={()=>{
        if (this.props.pose == 'skills') {
          this.props.changePose('start')
          this.props.changeNextPose('aboutme')
        } else {
          this.props.changePose('start')
          this.props.changeNextPose('skills')
        }
      }}
      onPoseComplete={()=>{
        this.setState({top: random(20,70), left: random(60,70)})
      }}>
        <b>My Skills</b>
        {
          this.props.pose == 'aboutme'
          ?
          <p style={{fontSize:'45%'}}>Oh don't you worry,<br />I am a man of many skills</p>
          :
          this.props.pose == 'skills'
          ?
          <p style={{fontSize:'30%',whiteSpace: "pre-wrap"}}>{"\n"}In terms of computer science, I have experience in both{"\n"}{"\n"}{"\t"}Backend Development:{"\n"}{"\t"}{"\t"}Java{"\n"}{"\t"}{"\t"}NodeJS{"\n"}{"\t"}{"\t"}Api Usage{"\n"}{"\n"}and{"\n"}{"\n"}{"\t"}Frontend Development:{"\n"}{"\t"}{"\t"}Javscript{"\n"}{"\t"}{"\t"}HTML and CSS{"\n"}{"\t"}{"\t"}ReactJS{"\n"}{"\t"}{"\t"}React Native</p>
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
