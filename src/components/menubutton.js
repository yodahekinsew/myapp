import React, { Component} from 'react';
import '../App.css';
import Button from './button.js';
import MenuIcon from '../img/menu_icon.png';
import { connect } from 'react-redux';
import {changeTab, changeShowMenu, changeMenuButton} from '../actions';
import posed from "react-pose";
import styled from "styled-components";

const Box = styled(posed.div({
  '>': {marginLeft: '0vw'},
  '<': {marginLeft: '15vw'}
}))`
  background-color: rgba(0,0,0,.85);
  width: 3vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

const Icon = styled(posed.div({
  '<': {transform: 'rotateY(180deg)'},
  '>': {transform: 'rotateY(0deg)'}
}))`
`;

const icon_image = <img alt="" src={MenuIcon} style={{width:'2vw', marginLeft:'.5vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class MenuButton extends Component {
  render() {
    return (
      <Box pose={this.props.menuButton}>
        <Icon pose={this.props.menuButton}>
        <Button style={{color: 'white', fontSize:'5vmin', outline: 'none', outlineOffset: 'none', marginTop:'45vh'}} text={icon_image}
        func={()=>{
          if (this.props.menuButton === '<') {
            this.props.changeShowMenu('closed')
            this.props.changeMenuButton('>')
          } else if (this.props.menuButton === '>') {
            this.props.changeShowMenu('open')
            this.props.changeMenuButton('<')
          }}}/>
        </Icon>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.newState.tab,
    showMenu: state.newState.showMenu,
    menuButton: state.newState.menuButton,
  }
}

const mapActionsToProps = {changeTab, changeShowMenu, changeMenuButton}

export default connect(mapStateToProps,mapActionsToProps)(MenuButton)
