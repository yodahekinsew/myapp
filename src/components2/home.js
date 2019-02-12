import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeTab} from '../actions';
import Header from './modals/header.js';
import AboutMe from './modals/aboutme.js';
import Projects from './modals/projects.js';
import WhatsGood from './modals/whatsgood.js';
import ContactMe from './modals/contactme.js';


class Home extends Component {
  render() {
    return (
      <div style={{height:'100vh',width:'100vw', position:'absolute'}}>
        <Header />
        <AboutMe />
        <Projects />
        <WhatsGood />
        <ContactMe />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.newState.tab,
  }
}

const mapActionsToProps = {changeTab}

export default connect(mapStateToProps, mapActionsToProps)(Home)
