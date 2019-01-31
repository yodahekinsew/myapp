import React, { Component} from 'react';
import '../App.css';
import Background1 from '../img/about_me_background1.jpg';
import Background2 from '../img/about_me_background2.jpg';
import Background3 from '../img/about_me_background3.jpg';
import Page1 from '../img/about_me_page_1.png';
import Page2 from '../img/about_me_page_2.png';
import Menu from './menu.js';
import { connect } from 'react-redux';
import {changeTab, changeShowMenu} from '../actions';

const background1 = <img alt="" src={Background1} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background2 = <img alt="" src={Background2} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background3 = <img alt="" src={Background3} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const page1 = <img alt="" src={Page1} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const page2 = <img alt="" src={Page2} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class AboutMe extends Component {
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
      <div style={{height:'200vh', width:'100vw'}}>
        <Menu />
        <div
          style={{height:'100vh',
                  width:'100vw',
                  position:'relative'}}>
          {this.state.background}
          {page1}
        </div>
        <div
          style={{height:'100vh',
                  width:'100vw',
                  position:'relative'}}>
          {page2}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    tab: state.newState.tab,
    showMenu: state.newState.showMenu,
  }
}

const mapActionsToProps = {changeTab, changeShowMenu}

export default connect(mapStateToProps, mapActionsToProps)(AboutMe)
