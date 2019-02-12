import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeTab, changePose, changeNextPose} from '../../../actions';
import posed from "react-pose";
import styled from "styled-components";

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

const Box = posed.div({
  'start': {left:`-30%`, top:'10%'},
  'initial': {left:`-30%`, top:'10%'},
  'home': {left:`-30%`, top:'10%'},
  'projects': {left:({ left })=>`${left}%`, top:({ top })=>`${top}%`, fontSize:'50%'},
  'contactme': {left:`-30%`, top:'10%'},
  'hireme': {left:`-30%`, top:'10%'},
  'aboutme': {left:`-30%`, top:'10%'},
  'otherside': {left:`-30%`, top:'10%'},
  'soundclout': {left:'35%', top:'0%', fontSize:'85%'},
  'freespeech': {left:`-30%`, top:'10%'},
});

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {top: random(50,80), left: random(5,15)}
  }
  render() {
    return (
      <Box pose={this.props.pose} left={this.state.left} top={this.state.top} style={{justifyContent:'center', alignItems:'center', height:'15%',width:'25%', position:'absolute', fontFamily:'monospace', textAlign:'left'}}
      onClick={()=>{
        if (this.props.pose == 'soundclout') {
          this.props.changePose('start')
          this.props.changeNextPose('projects')
        } else {
          this.props.changePose('start')
          this.props.changeNextPose('soundclout')
        }
      }}
      onPoseComplete={()=>{
        this.setState({top: random(50,80), left: random(5,15)})
      }}>
        <b>SoundClout</b>
        {
          this.props.pose == 'projects'
          ?
          <p style={{fontSize:'45%'}}>I have a lot of different interests</p>
          :
          this.props.pose == 'soundclout'
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
