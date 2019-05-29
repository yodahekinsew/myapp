import React, { Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {changeTab} from '../actions';

class App extends Component {
  render() {
    return (
      <div style={{height:'200vh', width:'100vw', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
        <div style={{width:'90vw', height:'30vh', display:'flex', flexDirection:'row', backgroundColor:'black'}}>
        </div>

        <div style={{width:'90vw', height:'30vh', display:'flex', flexDirection:'row', backgroundColor:'black'}}>
        </div>

        <div style={{width:'90vw', height:'30vh', display:'flex', flexDirection:'row',backgroundColor:'black'}}>
        </div>

        <div style={{width:'90vw', height:'30vh', display:'flex', flexDirection:'row',backgroundColor:'black'}}>
        </div>

        <div style={{width:'90vw', height:'30vh', display:'flex', flexDirection:'row',backgroundColor:'black'}}>
        </div>
      </div>
    );
  }
}

export default App;
