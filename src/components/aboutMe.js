import React, { Component} from 'react';
import '../App.css';
import Background1 from '../img/about_me_background1_sm.png';
import Background2 from '../img/about_me_background2_sm.png';
import Background3 from '../img/about_me_background3_sm.png';
import Button from './button.js';
import Page1 from '../img/about_me_page_1.png';
import Page2 from '../img/about_me_page_2.png';
import Menu from './menu.js';
import { connect } from 'react-redux';
import {changeTab, changeShowMenu} from '../actions';

const background1 = <img alt="" src={Background1} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background2 = <img alt="" src={Background2} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background3 = <img alt="" src={Background3} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {background: background1, tracker: 1, show_menu:false, tab:1}

    setInterval(() => {
      if (this.state.tracker === 1) {
        this.setState({background: background2, tracker:2})
      } else if (this.state.tracker === 2) {
        this.setState({background: background3, tracker:3})
      } else {
        this.setState({background: background1, tracker:1})
      }
    }, 100)
  }

  render() {
    var color1 = this.state.tab===1?'#000000':"#a2a2a2"
    var color2 = this.state.tab===2?'#000000':"#a2a2a2"
    var color3 = this.state.tab===3?'#000000':"#a2a2a2"
    console.log(this.state.tab)
    console.log(color1)
    console.log(color2)
    console.log(color3)
    return (
      <div style={{height:'100vh', width:'100vw'}}>
        <Menu />
        <div
          style={{height:'100vh',
                  width:'100vw',
                  position:'relative'}}>
          {this.state.background}
          <pre style={{marginLeft:'50vw', marginTop:'10vh', position:'absolute', height:'80vh',width:'45vw'}}>
            <div style={{height:'5%', width:'100%', display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
              <Button style={{heigth:'100%', fontSize:'1vmax', fontFamily:'monospace', width:'33.3%', backgroundColor:color1, color:'white', display:'flex', alignItems:'center', justifyContent:'center'}} text={`My Background`} func={()=>{this.setState({tab:1})}}/>
              <Button style={{heigth:'100%', fontSize:'1vmax', fontFamily:'monospace', width:'33.3%', backgroundColor:color2, color:'white', display:'flex', alignItems:'center', justifyContent:'center'}} text={`My Skills`} func={()=>{this.setState({tab:2})}}/>
              <Button style={{heigth:'100%', fontSize:'1vmax', fontFamily:'monospace', width:'33.4%', backgroundColor:color3, color:'white', display:'flex', alignItems:'center', justifyContent:'center'}} text={`My Interests`} func={()=>{this.setState({tab:3})}}/>
            </div>
            <div style={{height:'95%', width:'100%', backgroundColor:'black', color:'white', padding:'5%', fontSize:'.9vmax', fontFamily:'monospace'}}>
            {
              this.state.tab == 1
              ?
              `Hello! My name is Yodahe Alemu!
I am an Ethiopian from Aurora, Colorado.

I am currently a sophomore at MIT (Massachusetts Institute of Technology)
studying Computer Science and Urban and International Development
and also concentrating in design and economics.

I'm currently doing research with the
Viral Communications group at the MIT Media Lab

When I'm not in class or doing research,I'm either
working on MIT's fashion magazine - The INFINITE,
dancing with MIT's DanceTroupe,
or working on my own personal projects!`
              :
              this.state.tab === 2
              ?
              `In terms of computer science, I have experience in both

\tBackend Development:
\t\tJava
\t\tNode Js
\t\tAPI Usage
and

\tFrontend Development:
\t\tJavaScript
\t\tHTML and CSS
\t\tReactJS
\t\tReact Native`
              :
              `I am interested in:
\tUI/UX
\tArtifical Intelligence
\tSocial Technology`
            }
            </div>
          </pre>
        </div>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    tab: state.newState.tab,
    showMenu: state.newState.showMenu,
  }
}

const mapActionsToProps = {changeTab, changeShowMenu}

export default connect(mapStateToProps, mapActionsToProps)(AboutMe)
