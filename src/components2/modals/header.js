import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeTab} from '../../actions';
import posed from "react-pose";
import styled from "styled-components";

function random(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

const Box = styled(posed.div({
  'start': {top:`-30%`, left:`35%`},
  'initial': {top:`40%`, left:`25%`, fontSize:'800%'},
  'home': {top:`0%`, left:`35%`, fontSize:'500%'},
  'hireme': {top:`-30%`, left:`35%`},
  'contactme': {top:`-30%`, left:`35%`},
  'aboutme': {top:`-30%`, left:`35%`},
  'projects': {top:`-30%`, left:`35%`},
  'blog': {left:'35%', top:'-30%'}
}))`
`;

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Box pose={this.props.pose} style={{justifyContent:'center', alignItems:'center', height:'30%',width:'50%', position:'absolute', fontFamily:'monospace', textAlign:'left'}} onClick={()=>{this.props.changeTab("home")}}>
        <b>Yodahe Alemu</b>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.newState.tab,
    pose: state.newState.pose,
  }
}

const mapActionsToProps = {changeTab}

export default connect(mapStateToProps, mapActionsToProps)(Header)
