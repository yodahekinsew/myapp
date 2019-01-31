import React, { Component} from 'react';
import '../App.css';
import Background1 from '../img/cool_stuff_background1.JPG';
import Background2 from '../img/cool_stuff_background2.JPG';
import Background3 from '../img/cool_stuff_background3.JPG';
import { connect } from 'react-redux';
import {changeTab, changeShowMenu} from '../actions';
import SoundCloutInfo from './soundcloutinfo.js';
import FreeSpeachInfo from './freespeachinfo.js';
import Menu from './menu.js';

const background1 = <img alt="" src={Background1} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background2 = <img alt="" src={Background2} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background3 = <img alt="" src={Background3} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class CoolStuff extends Component {
  constructor() {
    super();
    this.state = {background: background1, tracker: 1, show_menu:false}

    setInterval(() => {
      if (this.state.tracker === 1) {
        this.setState({background: background2, tracker:2})
      } else if (this.state.tracker === 2) {
        this.setState({background: background3, tracker:3})
      } else {
        this.setState({background: background1, tracker:1})
      }
    }, 100)
  }

  render() {
    return (
      <div style={{position: 'absolute', height:'100vh',width:'100vw'}}>
        {this.state.background}
        <Menu/>
        <div style={{marginTop:'100vh'}}>
        <SoundCloutInfo />
        <FreeSpeachInfo />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    tab: state.newState.tab,
    showMenu: state.newState.showMenu
  }
}

const mapActionsToProps = {changeTab, changeShowMenu}

export default connect(mapStateToProps, mapActionsToProps)(CoolStuff)
