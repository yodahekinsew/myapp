import React, { Component} from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import {changeChannel} from '../../actions';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
var images = importAll(require.context('./memes', false, /\.(png|jpe?g|svg)$/));
var render_images = [];
for (var key in images) {
  render_images.push(<img alt="" src={images[key]} style={{marginLeft:'17.5vw', marginTop:'20vh', position:'absolute', width:'30vw',position:'absolute',backgroundAttachment: 'fixed', backfaceVisibility: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>)
}
class TvScreen extends Component {
  constructor() {
    super();
    this.state = {meme:0}
    setInterval(()=>{
      let previousMeme = this.state.meme;
      if (this.state.meme < render_images.length-1) {
        this.setState({meme:previousMeme+1});
      } else {
        this.setState({meme:0})
      }
    },2000)
  }
  render() {
    return (
      <div>
      {render_images[this.state.meme]}
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
