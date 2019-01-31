import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {changeShowOpening} from '../actions';
import FadeIn from 'react-fade-in';

const descriptors = ['"A REMARKABLE INDIVIDUAL"', '"A HUMBLE GENIUS"', '"LOVELY TO BE AROUND"', '"UNBELIEVABLY INNOVATIVE"', '"A TRUE VISIONARY"', '"TALENTED BEYOND BELIEF"', '"NEEEDLESSLY CARING"',
  '"CREATIVITY FLOWS THROUGH HIM"', '"PROFOUND AND WISE BEYOND HIS YEARS"', '"GETS A LOT OF PUSSY"', '"NOT RACIST"', '"HAS MORE THAN ONE FRIEND"',
  '"LOVES ALL TYPES OF PEOPLE"', '"NO KNOWN ALLERGIES"', '"6 FEET TALL"', '"CARES ABOUT WOMEN"', '"AMAZING IN BED"',
  '"EVEN MORE AMAZING AT SMASH"', '"WILL LAUGH AT ALL YOUR JOKES"', '"BREADED"', '"BUILT THIS WEBSITE"', '"ETHIOPIAN"',
  '"ONCE ATE ENTIRE PACK OF HOTDOGS IN ONE SITTING"','"A LOVING SON"', '"AN MIT STUDENT"', '"YOU\'VE NEVER SEEN ANYTHING LIKE ME"',
  '"REVOULUTIONARY"', 'YODAHE ALEMU']
var counter = 0

class Opening extends Component {
  constructor() {
    super();
    this.state = {top: '100px', left: '100px', text: descriptors[counter], time: 1000, fontSize: 3};
  }

  textChanger = (time) => {
    setTimeout(() => {
      counter += 1
      this.setState({text: descriptors[counter]})
      if (descriptors[counter] !== 'YODAHE ALEMU') {
        let previousTime = this.state.time
        let previousFontSize = this.state.fontSize;
        this.setState({time: previousTime/1.1})
        this.setState({fontSize: previousFontSize+1})
        this.textChanger(this.state.time)
      }
      if (descriptors[counter] === 'YODAHE ALEMU') {
        let previousFontSize = this.state.fontSize;
        this.setState({fontSize: previousFontSize+3})
        console.log(this.props.showForeground)
        this.props.changeShowOpening(false)
        console.log(this.props.showForeground)
      }
    }, time)
  }

  componentDidMount() {
    this.textChanger(this.state.time)
  }

  render() {
    return (
      <div style={{position: 'absolute', height:'100vh',width:'100vw'}}>
        <div className="background">
          <header className = "background-text" style={{fontFamily: 'Times New Roman', color:'white', fontSize: `${this.state.fontSize}vh`}} >{this.state.text}</header>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showOpening: state.newState.showOpening,
  }
}

const mapActionsToProps = {changeShowOpening}

export default connect(mapStateToProps, mapActionsToProps)(Opening)
