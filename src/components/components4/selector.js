import React, { Component} from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import {changeChannel, changeSelection} from '../../actions';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'black', position:'absolute', width:'13.5vw', height:'3.7vh', marginLeft:'85vw', marginTop:'35vh', outline:'solid 2px black'}}>
        <div style={{position:'absolute', outline:'solid 2px white', marginTop:'2%', marginLeft:'13%', width:'20%', height:'70%'}}/>
        <div style={{position:'absolute', backgroundColor:'white', color:'black', textAlign:'center', fontFamily:'verdana-bold', fontSize:'2vmin', marginLeft:'15%', width:'20%', height:'70%'}}
        onClick = {()=>{if (this.props.selection > 1) {this.props.changeSelection(this.props.selection-1)}}}>
          {'<<'}
        </div>

        <div style={{position:'absolute', outline:'solid 2px white', marginTop:'2%', marginLeft:'63%', width:'20%', height:'70%'}}/>
        <div style={{position:'absolute', backgroundColor:'white', color:'black', textAlign:'center', fontFamily:'verdana-bold', fontSize:'2vmin', marginLeft:'65%', width:'20%', height:'70%'}}
        onClick = {()=>{if (this.props.selection < this.props.maxSelection) {this.props.changeSelection(this.props.selection+1)}}}>
          {'>>'}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channel: state.newState.channel,
    selection: state.newState.selection,
    maxSelection: state.newState.maxSelection
  }
}

const mapActionsToProps = {changeChannel, changeSelection}

export default connect(mapStateToProps, mapActionsToProps)(App)
