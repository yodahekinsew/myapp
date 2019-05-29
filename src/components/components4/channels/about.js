import React, { Component} from 'react';
import '../../../App.css';
import { connect } from 'react-redux';
import {changeChannel} from '../../../actions';
import TomJerry from '../../../tomjerry.jpg';

const background = <img alt="" src={TomJerry} style={{height:'95%', width:'100%', position:'absolute', marginLeft:'2vw', marginTop:'3vh', backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>


class TvScreen extends Component {
  render() {
    return (
      <div>
      {background}
      {
        this.props.selection == 1
        ?
        <header style={{position:'absolute', color:'black', marginTop:'11vh', marginLeft:'9.5vw', opacity:'.5', fontSize:'4vmin', fontFamily:'verdana-bold'}}>Background Skills Interests</header>
        :
        this.props.selection == 2
        ?
        <header style={{position:'absolute', color:'black', marginTop:'11vh', marginLeft:'9.5vw', opacity:'.5', fontSize:'4vmin', fontFamily:'verdana-bold'}}>Background Skills Interests</header>
        :
        this.props.selection == 3
        ?
        <header style={{position:'absolute', color:'black', marginTop:'11vh', marginLeft:'9.5vw', opacity:'.5', fontSize:'4vmin', fontFamily:'verdana-bold'}}>Background Skills Interests</header>
        :
        null
      }
      {
        this.props.selection == 1
        ?
        <header style={{position:'absolute', color:'white', marginTop:'10vh', marginLeft:'10vw', fontSize:'4vmin', fontFamily:'verdana-bold'}}>Background <span style={{opacity:'.7'}}>Skills Interests</span></header>
        :
        this.props.selection == 2
        ?
        <header style={{position:'absolute', color:'white', marginTop:'10vh', marginLeft:'10vw', fontSize:'4vmin', fontFamily:'verdana-bold'}}><span style={{opacity:'.7'}}>Background</span> Skills <span style={{opacity:'.7'}}>Interests</span></header>
        :
        this.props.selection == 3
        ?
        <header style={{position:'absolute', color:'white', marginTop:'10vh', marginLeft:'10vw', fontSize:'4vmin', fontFamily:'verdana-bold'}}><span style={{opacity:'.7'}}>Background Skills</span> Interests</header>
        :
        null
      }
      {
        this.props.selection == 1
        ?
        <div style={{position:'absolute', color:'black', opacity:'.7', marginLeft:'9.75vw', marginTop:'25.5vh', fontSize:'2vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>Hello! My name is Yodahe Alemu!
        {'\n\n'}I am currently a sophomore at MIT (Massachusetts Institute
        {'\n'}of Technology) studying computer science and also concentrating
        {'\n'}in design and comparative media studies.
        {'\n\n'}When I'm not in class or doing research (currently doing research with
        {'\n'}the Viral Communications group at the MIT Media Lab), I'm either
        {'\n'}working on MIT's fashion magazine - The INFINITE, dancing with MIT's
        {'\n'}dancetroupe, or working on my own personal projects!</div>
        :
        this.props.selection == 2
        ?
        <div style={{position:'absolute', color:'black', opacity:'.7', marginLeft:'9.75vw', marginTop:'25.5vh', fontSize:'2vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>In terms of computer science, I have experience in both
        {'\n\t'}Backend Development:
        {'\n\t\t'}Java
        {'\n\t\t'}Node JS
        {'\n\t\t'}API Usage and Development
        {'\n\t'}Frontend Development:
        {'\n\t\t'}JavaScript
        {'\n\t\t'}HTML and CSS
        {'\n\t\t'}ReactJS
        {'\n\t\t'}React Native</div>
        :
        this.props.selection == 3
        ?
        <div style={{position:'absolute', color:'black', opacity:'.7', marginLeft:'9.75vw', marginTop:'25.5vh', fontSize:'2vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>I am interested in:
        {'\n\t'}UI/UX
        {'\n\t'}Artificial Intelligence
        {'\n\t'}Social Technology</div>
        :
        null
      }
      {
        this.props.selection == 1
        ?
        <div style={{position:'absolute', color:'white', marginLeft:'10vw', marginTop:'25vh', fontSize:'2vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>Hello! My name is Yodahe Alemu!
        {'\n\n'}I am currently a sophomore at MIT (Massachusetts Institute
        {'\n'}of Technology) studying computer science and also concentrating
        {'\n'}in design and comparative media studies.
        {'\n\n'}When I'm not in class or doing research (currently doing research with
        {'\n'}the Viral Communications group at the MIT Media Lab), I'm either
        {'\n'}working on MIT's fashion magazine - The INFINITE, dancing with MIT's
        {'\n'}dancetroupe, or working on my own personal projects!</div>
        :
        this.props.selection == 2
        ?
        <div style={{position:'absolute', color:'white', marginLeft:'10vw', marginTop:'25vh', fontSize:'2vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>In terms of computer science, I have experience in both
        {'\n\t'}Backend Development:
        {'\n\t\t'}Java
        {'\n\t\t'}Node JS
        {'\n\t\t'}API Usage and Development
        {'\n\t'}Frontend Development:
        {'\n\t\t'}JavaScript
        {'\n\t\t'}HTML and CSS
        {'\n\t\t'}ReactJS
        {'\n\t\t'}React Native</div>
        :
        this.props.selection == 3
        ?
        <div style={{position:'absolute', color:'white', marginLeft:'10vw', marginTop:'25vh', fontSize:'2vmin', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>I am interested in:
        {'\n\t'}UI/UX
        {'\n\t'}Artificial Intelligence
        {'\n\t'}Social Technology</div>
        :
        null
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channel: state.newState.channel,
    selection: state.newState.selection,
  }
}

const mapActionsToProps = {changeChannel}

export default connect(mapStateToProps, mapActionsToProps)(TvScreen)
