import React, { Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {changeTab} from '../actions';
import posed from "react-pose";
import styled from "styled-components";

const Button = posed.div({
  'click': {width:'100vw', height:'85vh', fontSize:'3vmin'},
  'notclick': {width:'90vw', height:'60vh', fontSize:'20vmin'},
});

const FadeIn = posed.div({
  'unmounted': {opacity:'0'},
  'mounted': {opacity:'1'},
});

class App extends Component {
  constructor() {
    super();
    this.state = {pose:'notclick'}
  }

  handleEnter = (tag) => {
    let element = document.getElementById(tag);
    element.style.backgroundColor = 'white';
    element.style.color = 'black';
    element.parentNode.style.zIndex = '2';
  }

  handleLeave = (tag) => {
    let element = document.getElementById(tag);
    element.style.backgroundColor = 'rgba(0,0,0,.4)';
    element.style.color = 'white';
  }

  componentDidMount() {
    let element = document.getElementById('fade')
    element.style.opacity = '1'
  }

  render() {
    return (
      <FadeIn id='fade' style={{position:'absolute', height:'80vh', marginTop:'15vh', width:'100vw', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Button pose={this.state.pose} id='resumebox' style={{transition:'width .5s, height .5s, background-color .5s, color .5s', whiteSpace:'pre-wrap', overflow:'scroll', backgroundColor:'rgba(0,0,0,.4)', outline:'solid 1px white', fontSize:'20vmin', fontFamily:'verdana-bold', textAlign:'center', marginTop:'5vh', height:'60vh', width:'90vw', color:'white'}}
        onMouseEnter={()=>{this.handleEnter('resumebox');this.setState({pose:'click'})}}
        onMouseLeave={()=>{this.handleLeave('resumebox');this.setState({pose:'notclick'})}}>
          {
            this.state.pose == 'notclick'
            ?
            <div style={{height:'100%', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>Resume</div>
            :
            <div style={{width:'100vw', height:'160vh', whiteSpace:'pre-wrap', textAlign:'left', padding:'5vmin'}}>
            Experience{'\t\t'}<span style={{fontFamily:'verdana-italic', fontSize:'2vmin'}}>Google{'\t'}{'\t'}Engineering Practicum Intern{'\t\t'}June, 2019 - August, 2019{'\t\t\t\t\t\t'}Mountain View, CA</span>
            {'\n\t\t\t\t'}<span style={{fontSize:'2vmin'}}>Incoming intern at Google for the summer of 2019.</span>
            {'\n\n\t\t\t\t'}<span style={{fontFamily:'verdana-italic', fontSize:'2vmin'}}>Nasdaq{'\t\t'}Full Stack Development Intern{'\t\t'}January, 2019 - February, 2019{'\t\t\t\t\t'}Boston, MA</span>
            {'\n\t\t\t\t'}<span style={{fontSize:'2vmin'}}>Built a ride-sharing app with a team of fellow interns in order to showcase an effective use case of Nasdaq's Markets{'\n\t\t\t\t\t\t'}Everywhere platform. Used technologies including React-Native to build the app and NodeJS to run an API server.{'\n\t\t\t\t\t\t'}Responsible for meeting with different groups in order to discuss the Market' Everywhere Platform such as H&M</span>
            {'\n\n\t\t\t\t'}<span style={{fontFamily:'verdana-italic', fontSize:'2vmin'}}>Intel{'\t\t'}Software Engineering Intern{'\t\t\t'}June, 2019 - August, 2019{'\t\t\t\t\t\t'}Chandler, AZ</span>
            {'\n\t\t\t\t'}<span style={{fontSize:'2vmin'}}>Built a reinforcement learning model and long-short term memory statistical model that act as a plugin to help improve{'\n\t\t\t\t\t\t'}network efficiencies for platforms. Tasks included python scripting, data analysis, compiling benchmarks, automating{'\n\t\t\t\t\t\t'}measurements, and researching and building machine learning models that best fit the scope of the problem.</span>
            {'\n\n\n'}Education<span style={{fontSize:'2vmin'}}>{'\t\t\t'}Massachusetts Institute of Technology{'\t\t\t'}Class of 2021{'\t\t\t'}Cambridge, MA</span>
            {'\n\t\t\t\t'}<span style={{fontSize:'2vmin'}}>Bachelor's in Computer Science and Engineering</span>
            {'\n\t\t\t\t'}<span style={{fontSize:'2vmin'}}>GPA: 4.0</span>
            {'\n\t\t\t\t'}<span style={{fontSize:'2vmin'}}>Relevant Courses:</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}>Machine Learning{'\t\t\t\t\t\t\t'}Artificial Intelligence</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}>Algorithms and Data Structures{'\t\t\t\t'}Computation Structures</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}>Elements of Software Construction{'\t\t\t\t'}Interconnected Embedded Systems</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}>Mathematics for Computer Science{'\t\t\t\t'}Automata, Computability, and Complexity</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}>Probability and Random Variables{'\t\t\t\t'}</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}></span>
            {'\n\n\n'}Technologies<span style={{fontSize:'2vmin'}}>{'\t\t'}Comfortable with:{'\t\t\t\t\t'}Experience with:</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}>Python{'\t\t\t\t\t\t\t'}Photoshop</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}>JavaScript\JQuery{'\t\t\t\t\t'}Photography</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}>ReactJS{'\t\t\t\t\t\t\t'}InDesign</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}>React-Native{'\t\t\t\t\t\t'}C++</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}>HTML/CSS{'\t\t\t\t\t\t'}NodeJS</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}>Version Control (Git){'\t\t\t\t'}SQL</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}>Java{'\t\t\t\t\t\t\t'}</span>
            {'\n\t\t\t\t\t'}<span style={{fontSize:'2vmin', fontFamily:'verdana'}}>Arduino{'\t\t\t\t\t\t\t'}</span>
            </div>
          }
        </Button>
      </FadeIn>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.newState.tab,
  }
}

const mapActionsToProps = {changeTab}

export default connect(mapStateToProps, mapActionsToProps)(App)
