import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeTab, changePose, changeNextPose} from '../../../actions';
import posed from "react-pose";
import styled from "styled-components";

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

const Box = posed.div({
  'start': {left:`100%`, top:'20%'},
  'initial': {left:`100%`, top:'20%'},
  'home': {left:`100%`, top:'20%'},
  'projects': {left:({ left })=>`${left}%`, top:({ top })=>`${top}%`, fontSize:'50%', width:'30%'},
  'contactme': {left:`100%`, top:'20%'},
  'hireme': {left:`100%`, top:'20%'},
  'aboutme': {left:`100%`, top:'20%'},
  'otherside': {left:'30%', top:'0%', fontSize:'85%', width:'45%'},
  'soundclout': {left:`100%`, top:'20%'},
  'freespeech': {left:`100%`, top:'20%'},
});

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {top: random(20,30), left: random(25,50)}
  }
  render() {
    return (
      <Box pose={this.props.pose} left={this.state.left} top={this.state.top} style={{justifyContent:'center', alignItems:'center', textAlign:'left', height:'10%', position:'absolute', fontFamily:'monospace'}}
      onClick={()=>{
        if (this.props.pose == 'otherside') {
          this.props.changePose('start')
          this.props.changeNextPose('projects')
        } else {
          this.props.changePose('start')
          this.props.changeNextPose('otherside')
        }
      }}
      onPoseComplete={()=>{
        this.setState({top: random(20,30), left: random(25,50)})
      }}>
        <b>The Other Side</b>
        {
          this.props.pose == 'projects'
          ?
          <p style={{fontSize:'45%'}}>I have a lot of different interests</p>
          :
          this.props.pose == 'otherside'
          ?
          <div style={{position:'relative', marginLeft:'-20vw', paddingTop:'5vh', fontSize:'5vmin'}}>
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
