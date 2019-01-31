import React, { Component} from 'react';
import '../App.css';
import Background1 from '../img/hire_me_background1.jpg';
import Background2 from '../img/hire_me_background2.jpg';
import Background3 from '../img/hire_me_background3.jpg';
import Background4 from '../img/hire_me_background4.jpg';
import Background5 from '../img/hire_me_background5.jpg';
import Background6 from '../img/hire_me_background6.jpg';
import Menu from './menu.js';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import {changeTab, changeShowMenu} from '../actions';

const background1 = <img alt="" src={Background1} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background2 = <img alt="" src={Background2} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background3 = <img alt="" src={Background3} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background4 = <img alt="" src={Background4} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background5 = <img alt="" src={Background5} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const background6 = <img alt="" src={Background6} style={{height:'100vh',width:'100vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class HireMe extends Component {
  constructor() {
    super();
    this.state = {email:"From: ",subject:"You got the job!",emailText:"",background: background1, tracker: 1, show_menu:false}

    setInterval(() => {
      if (this.state.tracker === 1) {
        this.setState({background: background2, tracker:2})
      } else if (this.state.tracker === 2) {
        this.setState({background: background3, tracker:3})
      } else if (this.state.tracker === 3) {
        this.setState({background: background4, tracker:4})
      } else if (this.state.tracker === 4) {
        this.setState({background: background5, tracker:5})
      } else if (this.state.tracker === 5) {
        this.setState({background: background6, tracker:6})
      } else {
        this.setState({background: background1, tracker:1})
      }
    }, 100)
  }

  handleTab = (event) => {
    if (event.keyCode === 9) {
      let emailText=this.state.emailText;
      this.setState({emailText: emailText+"\t"});
      event.preventDefault();
      console.log(this.state.emailText)
    }
  }

  render() {
    return (
      <div>
      {this.state.background}
      <div style={{height:'100vh',width:'100vw', position:'absolute'}}>
        <Menu/>
        <div style={{marginLeft:'50vw', marginTop: '30vh', height:'60vh', width:'40vw', position:'absolute'}}>
          <div style={{height:'10%', width:'100%', paddingTop:'3.5%', backgroundColor:'rgba(0,0,0,.8)'}}>
            <pre style={{overflow:'hidden', height:'80%', width:'90%', paddingLeft:'3%', paddingRight:'5%', paddingTop:'.6%', marginLeft:'5%', backgroundColor:'black'}}>
              <header style={{color:'white', fontFamily:'monospace'}}>To: yodahekinsew@gmail.com</header>
            </pre>
          </div>
          <div style={{height:'10%', width:'100%', backgroundColor:'rgba(0,0,0,.8)'}}>
            <pre style={{overflow:'hidden', height:'60%', width:'90%', paddingLeft:'3%', paddingRight:'5%', paddingTop:'.6%', marginLeft:'5%', backgroundColor:'black'}}>
              <Input fullWidth={true} value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}} style={{color:'white', fontFamily:'monospace', fontSize:'1.5vmin'}}/>
            </pre>
          </div>
          <div style={{height:'70%', width:'100%', paddingTop:'4%',backgroundColor:'rgba(0,0,0,.7)'}}>
            <pre style={{overflow:'hidden', height:'90%',width:'90%', marginLeft:'5%', paddingLeft:'3%', paddingRight:'5%', paddingTop:'1%',}}>
              <Input onKeyDown={(event)=>{this.handleTab(event)}} multiline={true} value={this.state.emailText} onChange={(event)=>{this.setState({emailText:event.target.value})}} placeholder={`Type a message here!\nFor example, you could say something like...\n\n\nHello Yodahe,\n\nSuch a cool website! Just wanted to let you know that you got the job! Of course you did - who else could?\n\nBest,\nMy President`} rows={20} fullWidth={true} style={{overflow:'hidden', fontFamily:'monospace', fontSize:'1.5vmin'}}/>
            </pre>
          </div>
        </div>
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

export default connect(mapStateToProps, mapActionsToProps)(HireMe)
