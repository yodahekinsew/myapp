import React, { Component} from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import {changeChannel} from '../../actions';
import TvGrain from '../../grain.png';
import Home from './channels/home.js';
import Projects from './channels/projects.js';
import About from './channels/about.js';
import Fun from './channels/fun.js';
import Contact from './channels/contact.js';


const tvGrain = <img alt="" src={TvGrain} style={{height:'85vh', width:'65vw', position:'absolute', opacity:".2", width:'100vw',position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class TvScreen extends Component {
  render() {
    return (
      <div style={{alignItems:'center', position:'absolute', height:'95vh', width:'70vw', marginLeft:'15vw', marginTop:'3vh', backgroundColor:'black'}}>
      {
        this.props.channel == 'home'
        ?
        <div>
        {tvGrain}
        <Home/>
        </div>
        :
        this.props.channel == 'projects'
        ?
        <div>
        {tvGrain}
        <Projects/>
        </div>
        :
        this.props.channel == 'about'
        ?
        <div>
        {tvGrain}
        <About/>
        </div>
        :
        this.props.channel == 'contact'
        ?
        <div>
        {tvGrain}
        <Contact/>
        </div>
        :
        null
      }
      {tvGrain}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channel: state.newState.channel,
  }
}

const mapActionsToProps = {changeChannel}

export default connect(mapStateToProps, mapActionsToProps)(TvScreen)
