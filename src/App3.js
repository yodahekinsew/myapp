import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Opening from './components/opening.js';
import { connect } from 'react-redux';
import {changeTab} from './actions';
import AppPage from './components2/apppage.js';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';
import ProfilePic from './profile2.png';
import ProfilePicRev from './profile2_rev.png'
import BubblePic from './bubble.png';
import BigBubblePic from './big_pink_bubble.png';
import BigBubblePic2 from './big_pink_bubble2.png';
import BigBubblePic3 from './big_pink_bubble3.png';
import CloudsPic from './clouds.png';
import TreePic from './tree.png';

const profile = <img alt="" src={ProfilePic} style={{height:'40vh',width:'40vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const profile_rev = <img alt="" src={ProfilePicRev} style={{height:'40vh',width:'25vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const bubble = <img alt="" src={BubblePic} style={{height:'40vh',width:'50vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const big_bubble = <img alt="" src={BigBubblePic} style={{height:'100vh',width:'50vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const big_bubble2 = <img alt="" src={BigBubblePic2} style={{height:'100vh',width:'50vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const big_bubble3 = <img alt="" src={BigBubblePic3} style={{height:'100vh',width:'45vw', position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

class App extends Component {
  constructor() {
    super();
    this.state={page:'home', counter:0, about:'background'}
    this.ref1_a = React.createRef();this.ref1_b = React.createRef();
    this.ref2_a = React.createRef();this.ref2_b = React.createRef();
    this.ref3_a = React.createRef();this.ref3_b = React.createRef();
    this.ref4_a = React.createRef();this.ref4_b = React.createRef();
    this.ref5_a = React.createRef();this.ref5_b = React.createRef();
    this.ref6_a = React.createRef();this.ref6_b = React.createRef();
    this.ref7_a = React.createRef();this.ref7_b = React.createRef();
    this.ref8_a = React.createRef();this.ref8_b = React.createRef();
    this.ref9_a = React.createRef();this.ref9_b = React.createRef();
  }

  changeDrop = (fore, back) => {
    fore.current.style.zIndex="1"
    fore.current.style.outline="1px solid white"
    back.current.style.zIndex="1"
    var x;
    var y;
    var a;
    var b;
    switch(back.current.id) {
      case "noGood":x=0;y=5;a=5.5;b=2;break;
      case "whyRunning":x=0;y=.5;a=5.5;b=4;break;
      case "darkness":x=2.5;y=.5;a=5.5;b=4;break;
      case "creeping":x=2.5;y=5;a=5.5;b=4;break;
      case "yuh":x=2;y=2.5;a=2.75;b=6;break;
      default:x=0;y=0;a=0;b=0;
    }
    setTimeout(()=>{
      let previousTop = parseFloat(back.current.style.marginTop.split('vw')[0])
      let previousLeft = parseFloat(back.current.style.marginLeft.split('vh')[0])
      back.current.style.marginTop = `${previousTop-x-.09}vh`
      back.current.style.marginLeft = `${previousLeft-y-.045}vw`

      previousTop = parseFloat(fore.current.style.marginTop.split('vw')[0])
      previousLeft = parseFloat(fore.current.style.marginLeft.split('vh')[0])
      fore.current.style.marginTop = `${previousTop-x}vh`
      fore.current.style.marginLeft = `${previousLeft-y}vw`

      let previousWidth = parseFloat(fore.current.style.width.split('vw')[0])
      let previousHeight = parseFloat(fore.current.style.height.split('vh')[0])
      fore.current.style.width = `${previousWidth+a}vw`
      fore.current.style.height = `${previousHeight+b}vh`

      previousWidth = parseFloat(back.current.style.width.split('vw')[0])
      previousHeight = parseFloat(back.current.style.height.split('vh')[0])
      back.current.style.width = `${previousWidth+a}vw`
      back.current.style.height = `${previousHeight+b}vh`

      let previousCounter = this.state.counter;
      this.setState({counter: previousCounter+1});
      if (this.state.counter < 10) {this.changeDrop(fore, back)} else {this.setState({counter:0,});back.current.title="hidden";back.current.style.opacity="0"}
    },25)
  }

  returnDrop = (fore, back) => {
    back.current.style.opacity="1"
    var x;
    var y;
    var a;
    var b;
    switch(back.current.id) {
      case "noGood":x=0;y=5;a=5.5;b=2;break;
      case "whyRunning":x=0;y=.5;a=5.5;b=4;break;
      case "darkness":x=2.5;y=.5;a=5.5;b=4;break;
      case "creeping":x=2.5;y=5;a=5.5;b=4;break;
      case "yuh":x=2;y=2.5;a=2.75;b=6;break;
      default:x=0;y=0;a=0;b=0;
    }
    setTimeout(()=>{
      let previousTop = parseFloat(back.current.style.marginTop.split('vw')[0])
      let previousLeft = parseFloat(back.current.style.marginLeft.split('vh')[0])
      back.current.style.marginTop = `${previousTop+x+.09}vh`
      back.current.style.marginLeft = `${previousLeft+y+.045}vw`

      previousTop = parseFloat(fore.current.style.marginTop.split('vw')[0])
      previousLeft = parseFloat(fore.current.style.marginLeft.split('vh')[0])
      fore.current.style.marginTop = `${previousTop+x}vh`
      fore.current.style.marginLeft = `${previousLeft+y}vw`

      let previousWidth = parseFloat(fore.current.style.width.split('vw')[0])
      let previousHeight = parseFloat(fore.current.style.height.split('vh')[0])
      fore.current.style.width = `${previousWidth-a}vw`
      fore.current.style.height = `${previousHeight-b}vh`

      previousWidth = parseFloat(back.current.style.width.split('vw')[0])
      previousHeight = parseFloat(back.current.style.height.split('vh')[0])
      back.current.style.width = `${previousWidth-a}vw`
      back.current.style.height = `${previousHeight-b}vh`

      let previousCounter = this.state.counter;
      this.setState({counter: previousCounter+1});
      if (this.state.counter < 10) {this.returnDrop(fore, back)} else {this.setState({counter:0,});back.current.title="shown";fore.current.style.zIndex="0";back.current.style.zIndex="0";fore.current.style.outline="0px solid white"}
    },25)
  }

  render() {
    let height = this.state.page == 'home' ? 200 : this.state.page == 'about' ? 175 : 185;
    return (
      <div style={{height:`${height}vh`, width:'100vw', position:'relative',overflow:'hidden'}}>
        <div id="Page" style={{position:'fixed', backgroundColor:'#3a6a53', height:'100%', width:'100%'}}/>
        <div style={{position:'relative', width:'100%', height:'14vh'}}>
          <div style={{position:'absolute', color:'#784f36', width:'100%', marginTop:'.5%', marginLeft: '1%', textAlign:'center', fontSize:'700%', fontFamily:'verdana-bold'}}>YODAHE ALEMU</div>
          <div style={{position:'absolute', color:'#eeb2d3', width:'100%', marginTop:'.25%', marginLeft: '.5%', textAlign:'center', fontSize:'700%', fontFamily:'verdana-bold'}}>YODAHE ALEMU</div>
          <div style={{position:'absolute', color:'white', width:'100%', textAlign:'center', fontSize:'700%', fontFamily:'verdana-bold'}}>YODAHE ALEMU</div>
        </div>

        <div style={{position:'relative', backgroundColor:'white', height:'1vh', width:'90%', marginLeft:'5%'}} />

        <div style={{position:'relative', width:'40%', marginLeft:'52.5%', marginBottom:'.3%', display:'flex', fontSize:'150%', justifyContent:'space-between', fontFamily:'verdana-bolditalic'}}>
          {this.state.page == 'home' ? <p onClick={()=>{this.setState({page:'home'})}} style={{textDecoration:'underline', color:'white'}}>Home</p> : <p onClick={()=>{this.setState({page:'home'})}} style={{color:'white'}}>Home</p>}
          {this.state.page == 'about' ? <p onClick={()=>{this.setState({page:'about'})}} style={{textDecoration:'underline', color:'#eeb2d3'}}>About Me</p> : <p onClick={()=>{this.setState({page:'about'})}} style={{color:'#eeb2d3'}}>About Me</p>}
          {this.state.page == 'projects' ? <p onClick={()=>{this.setState({page:'projects'})}} style={{textDecoration:'underline', color:'#784f36'}}>Projects</p> : <p onClick={()=>{this.setState({page:'projects'})}} style={{color:'#784f36'}}>Projects</p>}
        </div>
        {
          this.state.page == 'home'
          ?
          <div style={{position:'relative', height:'89%', width:'100%'}}>
            <div id="whyRunning" title="shown" ref={this.ref9_b} style={{height:'50vh',width:'40vw', marginLeft:'8vw', marginRight:'2.5vw', marginTop:'1vh', backgroundColor:'white', position:'absolute'}}/>
            <div ref={this.ref9_a} style={{height:'50vh',width:'40vw', marginLeft:'7.5vw', marginRight:'2.5vw', backgroundColor:'#eeb2d3', position:'absolute',  fontSize:'650%', textAlign:'center', fontFamily:'verdana-bold', color:'white'}}
            onClick={()=>{if (this.ref9_b.current.title == "shown") {this.changeDrop(this.ref9_a,this.ref9_b)} else {this.returnDrop(this.ref9_a,this.ref9_b)}}}>
            Link to my longest yeah boi ever!!!
            </div>

            <div id="egg1" title="shown" ref={this.ref8_b} style={{height:'20vh', width:'18vw', marginLeft:'30vw', marginTop:'56vh', backgroundColor:'white', position:'absolute'}}/>
            <div ref={this.ref8_a} style={{height:'20vh', width:'18vw', marginLeft:'29.5vw', marginTop:'55vh', backgroundColor:'#784f36', position:'absolute', fontSize:'700%', textAlign:'center', fontFamily:'verdana-bold', color:'white'}}
            onClick={()=>{if (this.ref8_b.current.title == "shown") {this.changeDrop(this.ref8_a,this.ref8_b)} else {this.returnDrop(this.ref8_a,this.ref8_b)}}}>
            EGG
            </div>

            <div id="egg2" title="shown" ref={this.ref7_b} style={{height:'20vh', width:'18vw', marginLeft:'8vw', marginTop:'56vh', backgroundColor:'white', position:'absolute'}}/>
            <div ref={this.ref7_a} style={{height:'20vh', width:'18vw', marginLeft:'7.5vw', marginTop:'55vh', backgroundColor:'#784f36', position:'absolute', fontSize:'700%', textAlign:'center', fontFamily:'verdana-bold', color:'white'}}
            onClick={()=>{if (this.ref7_b.current.title == "shown") {this.changeDrop(this.ref7_a,this.ref7_b)} else {this.returnDrop(this.ref7_a,this.ref7_b)}}}>
            EGG
            </div>

            <div id="noGood" title="shown" ref={this.ref1_b} style={{position:'absolute', opacity:`${this.state.drop}`, backgroundColor:'white', height:'75vh', marginTop:`1vh`, width:'40vw', marginLeft:`53vw`}}/>
            <div ref={this.ref1_a} style={{position:'absolute', backgroundColor:'#784f36', height:'75vh', width:'40vw', marginLeft:'52.5vw', fontSize:'1000%', textAlign:'center', fontFamily:'verdana-bold', color:'white'}}
            onClick={()=>{if (this.ref1_b.current.title == "shown") {this.changeDrop(this.ref1_a,this.ref1_b)} else {this.returnDrop(this.ref1_a,this.ref1_b)}}}>
            I'm up to no good.
            </div>

            <div id="yuh" title="shown" ref={this.ref2_b} style = {{position:'absolute', width:'63%', marginLeft:'30%', height:'20vh', marginTop:'81vh', backgroundColor:'white'}}/>
            <div ref={this.ref2_a} style = {{position:'absolute', width:'63%', marginLeft:'29.5%', height:'20vh', marginTop:'80vh', backgroundColor:'#eeb2d3', fontSize:'700%', textAlign:'center', fontFamily:'verdana-bold', color:'white'}}
            onClick={()=>{if (this.ref2_b.current.title == "shown") {this.changeDrop(this.ref2_a,this.ref2_b)} else {this.returnDrop(this.ref2_a,this.ref2_b)}}}>
            YUHHHHHHHHH
            </div>

            <div id="egg3" title="shown" ref={this.ref3_b} style={{height:'20vh', width:'18vw',  marginTop:'81vh', marginLeft:'8%', backgroundColor:'white', position:'absolute'}}/>
            <div ref={this.ref3_a} style={{height:'20vh', width:'18%',  marginTop:'80vh', marginLeft:'7.5%', backgroundColor:'#784f36', position:'absolute', fontSize:'700%', textAlign:'center', fontFamily:'verdana-bold', color:'white'}}
            onClick={()=>{if (this.ref3_b.current.title == "shown") {this.changeDrop(this.ref3_a,this.ref3_b)} else {this.returnDrop(this.ref3_a,this.ref3_b)}}}>
            EGG
            </div>

            <div id="darkness" title="shown" ref={this.ref4_b} style={{height:'50vh', width:'40%',  marginTop:'106vh', marginLeft:'8%', backgroundColor:'white', position:'absolute'}}/>
            <div ref={this.ref4_a} style={{height:'50vh', width:'40%',  marginTop:'105vh', marginLeft:'7.5%', backgroundColor:'#eeb2d3', position:'absolute', fontSize:'700%', textAlign:'center', fontFamily:'verdana-bold', color:'white'}}
            onClick={()=>{if (this.ref4_b.current.title == "shown") {this.changeDrop(this.ref4_a,this.ref4_b)} else {this.returnDrop(this.ref4_a,this.ref4_b)}}}>
            This sick strange darkeness
            </div>

            <div id="creeping" title="shown" ref={this.ref5_b} style = {{position:'absolute', width:'40%', marginLeft:'53%', height:'50vh', marginTop:'106vh', backgroundColor:'white'}}/>
            <div ref={this.ref5_a} style = {{position:'absolute', width:'40%', marginLeft:'52.5%', height:'50vh', marginTop:'105vh', backgroundColor:'#784f36', fontSize:'700%', textAlign:'center', fontFamily:'verdana-bold', color:'white'}}
            onClick={()=>{if (this.ref5_b.current.title == "shown") {this.changeDrop(this.ref5_a,this.ref5_b)} else {this.returnDrop(this.ref5_a,this.ref5_b)}}}>
            keeps creeping on me
            </div>

            <div title="shown" ref={this.ref6_b} style = {{position:'absolute', width:'85%', marginLeft:'8%', height:'15vh', marginTop:'161vh', backgroundColor:'white'}}/>
            <div ref={this.ref6_a} style = {{position:'absolute', width:'85%', marginLeft:'7.5%', height:'15vh', marginTop:'160vh', backgroundColor:'#784f36', fontSize:'700%', textAlign:'center', fontFamily:'verdana-bold', color:'white'}}
            onClick={()=>{if (this.ref6_b.current.title == "shown") {this.changeDrop(this.ref6_a,this.ref6_b)} else {this.returnDrop(this.ref6_a,this.ref6_b)}}}>
            Thanks for coming xD!!!!!
            </div>
          </div>
          :
          this.state.page == 'about'
          ?
          <div style={{position:'relative', height:'150vh', width:'80vw', marginLeft:'10vw'}}>
            <div style={{position:'absolute', height:'150vh', width:'80vw', marginLeft:'.5vw', marginTop:'1vh', backgroundColor:'#ffffff'}}/>
            <div style={{position:'absolute', height:'150vh', width:'80vw', backgroundColor:'#eeb2d3'}}/>
            {
              this.state.about=="background"
              ?
              <div>
                <div style={{position:'absolute', color:'#784f36', marginLeft:'2vw', fontSize:'600%', fontFamily:'verdana-bold'}}>Background</div>
                <div style={{position:'absolute', color:'#f3c9e0', marginLeft:'36vw', fontSize:'600%', fontFamily:'verdana-bold'}} onClick={()=>{this.setState({about:"skills"})}}>Skills</div>
                <div style={{position:'absolute', color:'#f3c9e0', marginLeft:'52vw', fontSize:'600%', fontFamily:'verdana-bold'}} onClick={()=>{this.setState({about:"interests"})}}>Interests</div>
                <div style={{position:'absolute', backgroundColor:'#784f36', width:'75vw', marginLeft:'2.5vw', height:'.5vh', marginTop:'10vh'}}/>
                <div style={{position:'absolute', color:'#784f36', marginLeft:'2vw', marginTop:'10vh', fontSize:'350%', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>Hello! My name is Yodahe Alemu! I am an Ethiopian from Aurora,Colorado.
                {'\n\n'}I am currently a sophomore at MIT (Massachusetts Institute of Technology) studying computer science and also concentrating in design and comparative media studies.
                {'\n\n'}When I'm not in class or doing research (currently doing research witht the Viral Communications group at the MIT Media Lab), I'm either working on MIT's fashion magazine - The INFINITE, dancing
                {'\n'}with MIT's dancetroupe,
                {'\n'}or working on my own
                {'\n'}personal projects!</div>
              </div>
              :
              this.state.about=="skills"
              ?
              <div>
                <div style={{position:'absolute', color:'#f3c9e0', marginLeft:'2vw', fontSize:'600%', fontFamily:'verdana-bold'}} onClick={()=>{this.setState({about:"background"})}}>Background</div>
                <div style={{position:'absolute', color:'#784f36', marginLeft:'36vw', fontSize:'600%', fontFamily:'verdana-bold'}}>Skills</div>
                <div style={{position:'absolute', color:'#f3c9e0', marginLeft:'52vw', fontSize:'600%', fontFamily:'verdana-bold'}} onClick={()=>{this.setState({about:"interests"})}}>Interests</div>
                <div style={{position:'absolute', backgroundColor:'#784f36', width:'75vw', marginLeft:'2.5vw', height:'.5vh', marginTop:'10vh'}}/>
                <div style={{position:'absolute', color:'#784f36', marginLeft:'2vw', marginTop:'10vh', fontSize:'350%', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>In terms of computer science, I have experience in both
                {'\n\t'}Backend Development:
                {'\n\t\t'}Java
                {'\n\t\t'}Node JS
                {'\n\t\t'}API Usage and Development
                {'\n\t'}Frontend Development:
                {'\n\t\t'}JavaScript
                {'\n\t\t'}HTML and CSS
                {'\n\t\t'}ReactJS
                {'\n\t\t'}React Native</div>
              </div>
              :
              <div>
                <div style={{position:'absolute', color:'#f3c9e0', marginLeft:'2vw', fontSize:'600%', fontFamily:'verdana-bold'}} onClick={()=>{this.setState({about:"background"})}}>Background</div>
                <div style={{position:'absolute', color:'#f3c9e0', marginLeft:'36vw', fontSize:'600%', fontFamily:'verdana-bold'}} onClick={()=>{this.setState({about:"skills"})}}>Skills</div>
                <div style={{position:'absolute', color:'#784f36', marginLeft:'52vw', fontSize:'600%', fontFamily:'verdana-bold'}}>Interests</div>
                <div style={{position:'absolute', backgroundColor:'#784f36', width:'75vw', marginLeft:'2.5vw', height:'.5vh', marginTop:'10vh'}}/>
                <div style={{position:'absolute', color:'#784f36', marginLeft:'2vw', marginTop:'10vh', fontSize:'350%', fontFamily:'verdana-bold', whiteSpace:'pre-wrap'}}>I am interested in:
                {'\n\t'}UI/UX
                {'\n\t'}Artificial Intelligence
                {'\n\t'}Social Technology</div>
              </div>
            }
            <div style={{position:'absolute', marginLeft:'85vh', marginTop:'105vh'}}>{profile_rev}</div>
          </div>
          :
          this.state.page == 'projects'
          ?
          <div style={{position:'relative', height:'100%', width:'100%'}}>
            <div style={{position:'absolute', height:'50vh', width:'80vw', marginLeft:'10.5vw', marginTop:'1vh', backgroundColor:'#ffffff'}}/>
            <div style={{position:'absolute', height:'50vh', width:'80vw', marginLeft:'10vw', backgroundColor:'#784f36'}}>
              <p style={{position:'absolute', color:'white', marginLeft: '1vw', marginTop:'1vh', fontSize:'400%', fontFamily:'verdana-bold'}}>SoundClout</p>
              <pre style={{position:'absolute', height:'45vh', width:'50vw', marginLeft:'27.5vw', marginTop:'2.5vh', backgroundColor:'#ffffff'}}>In Development...</pre>
              <pre style={{position:'absolute', height:'37.5vh', width:'22.5vw', marginLeft:'2.5vw', marginTop:'10vh', backgroundColor:'#784f36', color:'white'}}>Description...</pre>
            </div>

            <div style={{position:'absolute', height:'50vh', width:'80vw', marginLeft:'10.5vw', marginTop:'56vh', backgroundColor:'#ffffff'}}/>
            <div style={{position:'absolute', height:'50vh', width:'80vw', marginLeft:'10vw', marginTop:'55vh', backgroundColor:'#784f36'}}>
              <p style={{position:'absolute', color:'white', marginLeft: '1vw', marginTop:'1vh', fontSize:'400%', fontFamily:'verdana-bold'}}>Other Side</p>
              <pre style={{position:'absolute', height:'45vh', width:'50vw', marginLeft:'27.5vw', marginTop:'2.5vh', backgroundColor:'#ffffff'}}>In Development...</pre>
              <pre style={{position:'absolute', height:'37.5vh', width:'22.5vw', marginLeft:'2.5vw', marginTop:'10vh', backgroundColor:'#784f36', color:'white'}}>Description...</pre>
            </div>

            <div style={{position:'absolute', height:'50vh', width:'80vw', marginLeft:'10.5vw', marginTop:'111vh', backgroundColor:'#ffffff'}}/>
            <div style={{position:'absolute', height:'50vh', width:'80vw', marginLeft:'10vw', marginTop:'110vh', backgroundColor:'#784f36'}}>
              <p style={{position:'absolute', color:'white', marginLeft: '1vw', marginTop:'1vh', fontSize:'400%', fontFamily:'verdana-bold'}}>FreeSpeech</p>
              <pre style={{position:'absolute', height:'45vh', width:'50vw', marginLeft:'27.5vw', marginTop:'2.5vh', backgroundColor:'#ffffff'}}>In Development...</pre>
              <pre style={{position:'absolute', height:'37.5vh', width:'22.5vw', marginLeft:'2.5vw', marginTop:'10vh', backgroundColor:'#784f36', color:'white'}}>Description...</pre>
            </div>
          </div>
          :
          null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showOptions: state.newState.showOptions,
  }
}

const mapActionsToProps = {changeTab}

export default connect(mapStateToProps, mapActionsToProps)(App)
