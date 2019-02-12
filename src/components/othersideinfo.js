import React, { Component} from 'react';
import '../App.css';
import IconImage from '../img/other_side_icon.png';
import { connect } from 'react-redux';
import {changeTab} from '../actions';

const OtherSideIcon = <img alt="" src={IconImage} style={{height:'15vh',width:'80vw', marginLeft:'5vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class OtherSideInfo extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#a2a2a2', height:'100vh', width:'100vw'}}>
        {OtherSideIcon}
        <div style={{marginLeft:'10vw', position:'relative', paddingTop:'20vh', fontSize:'5vmin'}}>
          <pre style={{backgroundColor:'white', position:'absolute', height:'70vh', width:'60vw'}}>
            In Development...
          </pre>
          <pre style={{position:'absolute', color:'white', backgroundColor:'black', display:'inline', border:'1px solid black', height:'70vh', width:'20vw', marginLeft:'60vw'}}>
            Description
          </pre>
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

export default connect(mapStateToProps, mapActionsToProps)(OtherSideInfo)
