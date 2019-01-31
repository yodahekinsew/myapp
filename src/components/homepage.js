import React, { Component} from 'react';
import '../App.css';
import Background1 from '../img/homepage_background_1.PNG';
import Background2 from '../img/homepage_background_2.PNG';
import Background3 from '../img/homepage_background_3.PNG';
import Background4 from '../img/homepage_background_4.PNG';
import Background5 from '../img/homepage_background_5.PNG';
import Menu from './menu.js';
import { connect } from 'react-redux';
import {changeTab, changeShowMenu} from '../actions';

const background1 = <img alt="" src={Background1} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background2 = <img alt="" src={Background2} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background3 = <img alt="" src={Background3} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background4 = <img alt="" src={Background4} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background5 = <img alt="" src={Background5} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class Home extends Component {
  constructor() {
    super();
    this.state = {background: background1, tracker: 1, show_menu:false, direction: 1}
    setInterval(() => {
      if (this.state.tracker === 1) {
        this.setState({background: background2, tracker:2, direction:1})
      } else if (this.state.tracker === 2 && this.state.direction === 1) {
        this.setState({background: background3, tracker:3})
      } else if (this.state.tracker === 2 && this.state.direction === 0) {
        this.setState({background: background1, tracker:1})
      } else if (this.state.tracker === 3 && this.state.direction === 1) {
        this.setState({background: background4, tracker:4})
      } else if (this.state.tracker === 3 && this.state.direction === 0) {
        this.setState({background: background2, tracker:2})
      } else if (this.state.tracker === 4 && this.state.direction === 1) {
        this.setState({background: background5, tracker:5})
      } else if (this.state.tracker === 4 && this.state.direction === 0) {
        this.setState({background: background3, tracker:3})
      } else {
        this.setState({background: background4, tracker:1, direction:0})
      }
    }, 100)
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
