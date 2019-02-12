import React, { Component} from 'react';
import '../App.css';
import Background1 from '../img/home_background_1.png';
import Background2 from '../img/home_background_2.png';
import Background3 from '../img/home_background_3.png';
import Menu from './menu.js';
import { connect } from 'react-redux';
import {changeTab, changeShowMenu} from '../actions';

const background1 = <img alt="" src={Background1} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background2 = <img alt="" src={Background2} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background3 = <img alt="" src={Background3} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class Home extends Component {
  constructor() {
    super();
    this.state = {background: background1, tracker:1 , show_menu:false}
    setInterval(()=>{
      if (this.state.tracker === 1) {
        this.setState({background: background2, tracker:2})
      } else if (this.state.tracker === 2) {
        this.setState({background: background3, tracker:3})
      } else {
        this.setState({background: background1, tracker:1})
      }
    },100)
  }

  render() {

    return (
      <div>
        {this.state.background}
      <Menu/>
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

export default connect(mapStateToProps, mapActionsToProps)(Home)
