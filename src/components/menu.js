import React, { Component} from 'react';
import '../App.css';
import MenuButton from './menubutton.js';
import MenuBox from './menubox.js';
import { connect } from 'react-redux';
import {changeTab, changeShowMenu} from '../actions';

class Menu extends Component {
  render() {
    return (
      <div style={{zIndex:'1',height:'100vh',width:'5vw', position:'absolute'}}>
        <MenuBox/>
        <MenuButton/>
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

export default connect(mapStateToProps,mapActionsToProps)(Menu)
