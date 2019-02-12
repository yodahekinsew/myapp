import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeTab, changePose} from '../actions';
import Header from './modals/header.js';

import Blog from './modals/blog/blog.js';

import AboutMe from './modals/about/aboutme.js';
import Skills from './modals/about/skills.js';
import Interests from './modals/about/interests.js';
import Background from './modals/about/background.js';

import Projects from './modals/projects/projects.js';
import FreeSpeech from './modals/projects/freespeech.js';
import OtherSide from './modals/projects/otherside.js';
import SoundClout from './modals/projects/soundclout.js';

import ContactMe from './modals/contact/contactme.js';

import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';


class Home extends Component {
   componentWillMount() {
    setTimeout(()=>{this.props.changePose('home')},1000)
  }
  componentDidUpdate() {
    this.props.changePose(this.props.next_pose)
  }
  render() {
    return (
      <div style={{height:'100vh',width:'100vw', position:'relative', overflow:'hidden'}}>
        <Header/>
        <Blog/>

        <Projects/>
        <FreeSpeech/>
        <SoundClout/>
        <OtherSide/>

        <AboutMe/>
        <Skills/>
        <Interests/>
        <Background/>

        <ContactMe/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.newState.tab,
    next_pose: state.newState.next_pose
  }
}

const mapActionsToProps = {changeTab, changePose}

export default connect(mapStateToProps, mapActionsToProps)(Home)
