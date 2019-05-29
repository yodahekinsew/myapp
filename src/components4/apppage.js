import React, { Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {changeTab} from '../actions';
import Home from './home.js';
import About from './about.js';
import Portfolio from './portfolio.js';
import Resume from './resume.js';
import Contact from './contact.js';
import Header from './header.js';
import Title from './title.js'
import Background from '../programming.jpg';
const background = <img alt="" src={Background} style={{height:'100vh', position:'absolute', width:'100vw',position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class App extends Component {
  render() {
    return (
      <div style={{height:'100vh', width:'100vw', overflow:'hidden',}}>
        {background}
        <div style={{position:'absolute', backgroundColor:'black', opacity:'.6', height:'100vh', width:'100vw'}}/>
        <Header />
        {
          this.props.tab == 'home'
          ?
          <div>
          <Home/>
          </div>
          :
          this.props.tab == 'portfolio'
          ?
          <div>
          <Portfolio />
          </div>
          :
          this.props.tab == 'about'
          ?
          <div>
          <About />
          </div>
          :
          this.props.tab == 'resume'
          ?
          <div>
          <Resume />
          </div>
          :
          this.props.tab == 'contact'
          ?
          <div>
          <Contact />
          </div>
          :
          null
        }
        <Title/>
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

export default connect(mapStateToProps, mapActionsToProps)(App)
