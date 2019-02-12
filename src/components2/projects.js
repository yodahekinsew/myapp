import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeTab} from '../actions';

class Projects extends Component {
  render() {
    return (
      <div style={{height:'100vh',width:'100vw', position:'absolute'}}>
        <div style={{height:'30%',width:'20%', position:'absolute', top:'5%', left:'40%', fontFamily:'monospace', textAlign:'left'}} onClick={()=>{this.props.changeTab("home")}}>
        <b style={{fontSize:'300%'}}>Projects</b>
        <p style={{fontSize:'110%'}}>So yeah, I've done some cool<br />shit. You wanna see it?</p>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.newState.tab,
  }
}

const mapActionsToProps = {changeTab}

export default connect(mapStateToProps, mapActionsToProps)(Projects)
