import React, { Component} from 'react';
import HomeMenu from '../img/home_menu.png';
import AboutMeMenu from '../img/about_me_menu.png';
import CoolStuffMenu from '../img/cool_stuff_menu.png';
import HireMeMenu from '../img/hire_me_menu.png';
import posed from "react-pose";
import styled from "styled-components";
import { connect } from 'react-redux';
import {changeTab, changeShowMenu, changeMenuButton} from '../actions';

const Box = styled(posed.div({
  closed: {marginLeft: '-15vw'},
  open: {marginLeft: 0}
}))`
  background-color: rgba(0,0,0,.85);
  position: fixed;
  height: 100vh;
  width: 15vw;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

class MenuBox extends Component {
  onHover = (tabName) => {
    console.log('hovering')
    setTimeout(this.props.changeTab(tabName),1000)
    this.props.changeTab(tabName)
  }

  render() {
    return (
      <Box pose={this.props.showMenu}>
        <div style={{marginTop:'2vh', marginRight: '10vw'}}>
          <img alt="" src={HomeMenu} onClick={()=>{this.props.changeTab('home');window.scrollTo(0,0);setTimeout(()=>{this.props.changeShowMenu('closed');this.props.changeMenuButton('>');},150)}} style={{width:'10vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
        </div>
        <div style={{marginTop:'10vh', marginRight: '10vw'}}>
          <img alt="" src={AboutMeMenu} onClick={()=>{this.props.changeTab('aboutMe');window.scrollTo(0,0);setTimeout(()=>{this.props.changeShowMenu('closed');this.props.changeMenuButton('>');},150)}} style={{width:'10vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
        </div>
        <div style={{marginTop:'10vh', marginRight: '14vw'}}>
          <img alt="" src={CoolStuffMenu} onClick={()=>{this.props.changeTab('coolStuff');window.scrollTo(0,0);setTimeout(()=>{this.props.changeShowMenu('closed');this.props.changeMenuButton('>');},150)}} style={{width:'14vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
        </div>
        <div style={{marginTop:'17vh', marginRight: '10vw'}}>
          <img alt="" src={HireMeMenu} onClick={()=>{this.props.changeTab('hireMe');window.scrollTo(0,0);setTimeout(()=>{this.props.changeShowMenu('closed');this.props.changeMenuButton('>');},150)}} style={{width:'10vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
        </div>
        <div style={{marginTop:'50vh'}}>
          <header style={{color:'white', textDecoration:'underline'}}>Contact Me</header>
          <header style={{color:'white'}}>Email: <a href = 'mailto:yodahekinsew@gmail.com'>yodahekinsew@gmail.com</a></header>
          <header style={{color:'white'}}>Phone: (720) 490-2350</header>
          <header style={{color:'white'}}>LinkedIn: <a href='https://www.linkedin.com/in/yodahe-alemu/'>Yodahe Alemu</a></header>
        </div>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.newState.tab,
    showMenu: state.newState.showMenu,
  }
}

const mapActionsToProps = {changeTab, changeShowMenu, changeMenuButton}

export default connect(mapStateToProps,mapActionsToProps)(MenuBox);
