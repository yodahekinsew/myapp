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
  'projects': {left:({ left })=>`${left}%`, top:({ top })=>`${top}%`, fontSize:'50%'},
  'contactme': {left:`60%`, top:'100%'},
  'hireme': {left:`60%`, top:'100%'},
  'aboutme': {left:`60%`, top:'100%'},
  'otherside': {left:`60%`, top:'100%'},
  'freespeech': {left:'35%', top:'0%', fontSize:'85%'},
  'soundclout': {left:`60%`, top:'100%'},
});

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {top: random(50,80), left: random(70,80)}
  }
  render() {
    return (
      <Box pose={this.props.pose} left={this.state.left} top={this.state.top} style={{justifyContent:'center', alignItems:'center', height:'15%',width:'25%', position:'absolute', fontFamily:'monospace', textAlign:'left'}}
      onClick={()=>{
        if (this.props.pose == 'freespeech') {
          this.props.changePose('start')
          this.props.changeNextPose('projects')
        } else {
          this.props.changePose('start')
          this.props.changeNextPose('freespeech')
        }
      }}
      onPoseComplete={()=>{
        this.setState({top: random(50,80), left: random(70,80)})
      }}>
        <b>FreeSpeech</b>
        {
          this.props.pose == 'projects'
          ?
          <p style={{fontSize:'45%'}}>I have a lot of different interests</p>
          :
          this.props.pose == 'freespeech'
          ?
          <div style={{position:'relative', marginLeft:'-25vw', paddingTop:'5vh', fontSize:'5vmin'}}>
            <pre style={{position:'absolute', backgroundColor:'white', height:'70vh', width:'80vw'}}>
              In Development...
            </pre>
            <pre style={{position:'absolute', color:'white', backgroundColor:'black', display:'inline', border:'1px solid black', height:'70vh', width:'20vw', marginLeft:'60vw'}}>
              Description
            </pre>
          </div>
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
