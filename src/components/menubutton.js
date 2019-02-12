import React, { Component} from 'react';
import '../App.css';
import Button from './button.js';
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
  align-items: center;
`;

const Line1 = styled(posed.div({
  '<': {transform: 'rotate(45deg)', marginTop:'1.25vh'},
  '>': {transform: 'rotate(0deg)', marginTop:'0vh'}
}))`
  positon: absolute;
  height: .5vh;
  width: 2.5vw;
  background-color: white;
`;

const Line2 = styled(posed.div({
  '<': {marginTop:'3.5vh',},
  '>': {marginTop:'1.25vh',}
}))`
  position: absolute;
  height: .5vh;
  width: 2.5vw;
  background-color: white;
`;

const Line3 = styled(posed.div({
  '<': {transform: 'rotate(-45deg)', marginTop:'1.25vh'},
  '>': {transform: 'rotate(0deg)', marginTop:'2.5vh'}
}))`
  position: absolute;
  height: .5vh;
  width: 2.5vw;
  background-color: white;
`;

class MenuButton extends Component {
  render() {
    return (
      <Box pose={this.props.menuButton}>
        <Button
          style={{marginTop:'1vh'}}
          text={
            <div style={{display:'flex', position:'relative', flexDirection:'column', height:'3vh', width:'2.5vw'}}>
              <Line1 pose={this.props.menuButton} />
              <Line2 pose={this.props.menuButton} />
              <Line3 pose={this.props.menuButton} />
            </div>}
          func={()=>{
            if (this.props.menuButton === '<') {
              this.props.changeShowMenu('closed')
              this.props.changeMenuButton('>')
            } else if (this.props.menuButton === '>') {
              this.props.changeShowMenu('open')
              this.props.changeMenuButton('<')
            }}}/>
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
