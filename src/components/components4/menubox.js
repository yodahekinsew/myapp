import React, { Component} from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import {changeChannel, changeMaxSelection} from '../../actions';

class App extends Component {
  render() {
    return (
      <div style={{position:'absolute', height:'25vh', width:'13.5vw', marginLeft:'85vw', marginTop:'8vh', backgroundColor:"black", outline:'solid 2px black', display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
        <div style={{position:'relative', width:'12.5vw', height:'5vh',}}>
          <div style={{position:'absolute', outline:'solid 2px white', marginTop:'2.5%', width:'97.5%', height:'97.5%'}}/>
          {
            this.props.channel == 'projects'
            ?
            <div style={{position:'absolute', backgroundColor:'white', color:'black', textAlign:'center', fontFamily:'verdana-bold', fontSize:'3vmin', marginTop:'2.5%', width:'97.5%', height:'97.5%'}}
            onClick = {()=>{this.props.changeMaxSelection(3);this.props.changeChannel('home')}}>
            Projects
            </div>
            :
            <div style={{position:'absolute', backgroundColor:'white', color:'black', textAlign:'center', fontFamily:'verdana-bold', fontSize:'3vmin', marginLeft:'2.5%', width:'97.5%', height:'97.5%'}}
            onClick = {()=>{this.props.changeMaxSelection(3);this.props.changeChannel('projects')}}>
            Projects
            </div>
          }
        </div>
        <div style={{position:'relative', width:'12.5vw', height:'5vh',}}>
          <div style={{position:'absolute', outline:'solid 2px white', marginTop:'2.5%', width:'97.5%', height:'97.5%'}}/>
          {
            this.props.channel == 'about'
            ?
            <div style={{position:'absolute', backgroundColor:'white', color:'black', textAlign:'center', fontFamily:'verdana-bold', fontSize:'3vmin', marginTop:'2.5%', width:'97.5%', height:'97.5%'}}
            onClick = {()=>{this.props.changeMaxSelection(3);this.props.changeChannel('home')}}>
            About
            </div>
            :
            <div style={{position:'absolute', backgroundColor:'white', color:'black', textAlign:'center', fontFamily:'verdana-bold', fontSize:'3vmin', marginLeft:'2.5%', width:'97.5%', height:'97.5%'}}
            onClick = {()=>{this.props.changeMaxSelection(3);this.props.changeChannel('about')}}>
            About
            </div>
          }
        </div>
        <div style={{position:'relative', width:'12.5vw', height:'5vh',}}>
          <div style={{position:'absolute', outline:'solid 2px white', marginTop:'2.5%', width:'97.5%', height:'97.5%'}}/>
          {
            this.props.channel == 'contact'
            ?
            <div style={{position:'absolute', backgroundColor:'white', color:'black', textAlign:'center', fontFamily:'verdana-bold', fontSize:'3vmin', marginTop:'2.5%', width:'97.5%', height:'97.5%'}}
            onClick = {()=>{this.props.changeMaxSelection(3);this.props.changeChannel('home')}}>
            Contact
            </div>
            :
            <div style={{position:'absolute', backgroundColor:'white', color:'black', textAlign:'center', fontFamily:'verdana-bold', fontSize:'3vmin', marginLeft:'2.5%', width:'97.5%', height:'97.5%'}}
            onClick = {()=>{this.props.changeMaxSelection(1);this.props.changeChannel('contact')}}>
            Contact
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channel: state.newState.channel,
  }
}

const mapActionsToProps = {changeChannel, changeMaxSelection}

export default connect(mapStateToProps, mapActionsToProps)(App)
