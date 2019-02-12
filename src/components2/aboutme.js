import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeTab} from '../actions';

class About extends Component {
  constructor() {
    super();
    this.state = {top: 5, left: 40}
  }

  moveOut = () => {
    setTimeout(()=>{
      let previousTop = this.state.top;
      let previousLeft = this.state.left;
      this.setState({top:previousTop+.5,left:previousLeft-2})
    },100)
  }

  componentWillUnmount() {
    this.moveOut()
  }

  render() {
    return (
      <div style={{height:'100vh',width:'100vw', position:'absolute'}}>
        <div style={{height:'30%',width:'20%', position:'absolute', top:`${this.state.top}%`, left:`${this.state.left}%`, fontFamily:'monospace', textAlign:'left'}} onClick={()=>{this.props.changeTab("home")}}>
        <b style={{fontSize:'300%'}}>About Me</b>
        <p style={{fontSize:'110%'}}>I meannnnn... you came here<br />to learn about me, didn't you?</p>
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

export default connect(mapStateToProps, mapActionsToProps)(About)
