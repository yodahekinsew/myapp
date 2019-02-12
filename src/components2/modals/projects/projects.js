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
  'initial': {left:`60%`, top:'100%', fontSize:'300%'},
  'projects': {left:'35%', top:'0%', fontSize:'500%'},
  'home': {left:({ left })=>`${left}%`, top:({ top })=>`${top}%`, fontSize:'300%'},
  'contactme': {left:`60%`, top:'100%'},
  'hireme': {left:`60%`, top:'100%'},
  'aboutme': {left:`60%`, top:'100%'},
  'otherside': {left:`35%`, top:'-30%'},
  'soundclout': {left:`35%`, top:'-30%'},
  'freespeech': {left:`35%`, top:'-30%'},
  'blog': {left:'60%', top:'100%'}
});

class Projects extends Component {
  constructor() {
    super();
    this.state = {top: random(40,70), left: random(60,70)}
  }
  render() {
    return (
      <Box pose={this.props.pose} left={this.state.left} top={this.state.top} style={{justifyContent:'center', alignItems:'center', height:'15%',width:'25%', position:'absolute', fontFamily:'monospace', textAlign:'center'}}
      onClick={()=>{
        if (this.props.pose == 'projects') {
          this.props.changePose('start')
          this.props.changeNextPose('home')
        } else {
          this.props.changePose('start')
          this.props.changeNextPose('projects')
        }
      }}
      onPoseComplete={()=>{
        this.setState({top: random(40,70), left: random(60,70)})
      }}>
        <b>Projects</b>
        {
          this.props.pose == 'home'
          ?
          <p style={{fontSize:'50%'}}>So yeah, I've done some cool shit. You wanna see it?</p>
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

export default connect(mapStateToProps, mapActionsToProps)(Projects)
