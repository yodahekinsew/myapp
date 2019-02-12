import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeTab, changePose, changeNextPose} from '../../../actions';
import posed from "react-pose";
import styled from "styled-components";

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

const Box = posed.div({
  'start': {left:`100%`, top:'10%'},
  'initial': {left:`100%`, top:'10%'},
  'blog': {left:`45%`, top:`0%`, fontSize:'85%'},
  'home': {left:({ left })=>`${left}%`, top:({ top })=>`${top}%`, fontSize:'50%'},
  'contactme': {left:`100%`, top:'10%'},
  'hireme': {left:`100%`, top:'10%'},
  'projects': {left:`100%`, top:'10%'},
  'aboutme': {left:'100%', top:'10%'}
});

class Blog extends Component {
  constructor() {
    super();
    this.state = {top: random(15,30), left: random(60,70)}
  }
  render() {
    return (
      <Box pose={this.props.pose} left={this.state.left} top={this.state.top} style={{justifyContent:'center', alignItems:'center', height:'15%',width:'25%', position:'absolute', fontFamily:'monospace', textAlign:'center'}}
      onClick={()=>{
        if (this.props.pose == 'blog') {
          this.props.changePose('start')
          this.props.changeNextPose('home')
        } else {
          this.props.changePose('start')
          this.props.changeNextPose('blog')
        }
      }}
      onPoseComplete={()=>{
        this.setState({top: random(15,30), left: random(60,70)})
      }}>
        <b>Blog</b>
        {
          this.props.pose == 'home'
          ?
          <p style={{fontSize:'45%'}}>Get some insights on who I am<br />like on a deeper level</p>
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

export default connect(mapStateToProps, mapActionsToProps)(Blog)
