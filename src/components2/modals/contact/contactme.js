import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeTab, changePose, changeNextPose} from '../../../actions';
import posed from "react-pose";
import styled from "styled-components";

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

const Box = posed.div({
  'start': {left:`-30%`, top:'65%'},
  'initial': {left:`-30%`, top:'65%', fontSize:'300%'},
  'contactme': {left:'35%', top:'0%', fontSize:'500%'},
  'home': {left:({ left })=>`${left}%`, top:({ top })=>`${top}%`, fontSize:'300%'},
  'aboutme': {left:`-30%`, top:'65%'},
  'hireme': {left:`-30%`, top:'65%'},
  'projects': {left:`-30%`, top:'65%'},
  'blog': {left:'-30%', top:'65%'}
});

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {top: random(50,80), left: random(10,30)}
  }
  render() {
    return (
      <Box pose={this.props.pose} left={this.state.left} top={this.state.top} style={{justifyContent:'center', alignItems:'center', height:'15%',width:'30%', position:'absolute', fontFamily:'monospace', textAlign:'center'}}
      onClick={()=>{
        if (this.props.pose == 'contactme') {
          this.props.changePose('start')
          this.props.changeNextPose('home')
        } else {
          this.props.changePose('start')
          this.props.changeNextPose('contactme')
        }
      }}
      onPoseComplete={()=>{
        this.setState({top: random(50,80), left: random(15,30)})
      }}>
        <b>Contact Me</b>
        {
          this.props.pose == 'home'
          ?
          <p style={{fontSize:'50%'}}>Some ways to reach me in case<br />youever wanna ... you know ... talk</p>
          :
          this.props.pose == 'contactme'
          ?
          <p style={{fontSize:'40%'}}><br/>If you're trying to contact me you can reach me at<br/><br/><br/>Email: yodahekinsew@gmail.com<br/><br/>Phone: (720) 490-2359<br/><br/>LinkedIn: Blah Blah</p>
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
