import React, {Component} from 'react';
import heart from './heart.svg';
import filledHeart from './filledHeart.svg'


class HeartButton extends Component {
  constructor(props){
    super(props)

    this.state = {
      liked:false,
      likes: Math.floor(Math.random() * 100)
    };
  }

//change like status on click
toggleLike = () => {

  this.setState({liked: !this.state.liked});
  if(this.state.liked){
    this.decreaseLikes()
  } else {
    this.increaseLikes()
  }
}

//like
increaseLikes = () => {
  this.setState({likes: this.state.likes + 1})
}

//unlike
decreaseLikes = () => {
  this.setState({likes: this.state.likes - 1})
}

//return different svg depending on like
  render(){
    if(this.state.liked){
    return(
      <div className="likes">
    <img className="heart-icon" src={filledHeart} alt="liked heart" onClick={this.toggleLike} />
    <p className="likes-no">{this.state.likes} likes</p>
  </div>
  )} else {
    return(
      <div className="likes">
      <img className="heart-icon" src={heart} alt="unliked heart" onClick={this.toggleLike} />
      <p className="likes-no">{this.state.likes} likes</p>
    </div>
    )
  }

  }
}

export default HeartButton

// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(HeartButton, domContainer);
