import React, {Component} from 'react';
import heart from './heart.svg';
import filledHeart from './filledHeart.svg';

class Likes extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick = (id) => {
    this.props.toggleLike(id);
  }


  render(){
    const {card} = this.props
    return(
      <div className="likes">
    <HeartButton card={card} handleClick={this.handleClick} />
    <LikesNo card={card} />
    </div>
)
  }
}

class HeartButton extends Component{


render(){
  const {card} = this.props
  return <img className="heart-icon" src={card.heartIcon} alt="liked heart" onClick={() => this.props.handleClick(card.id)} />
}
}

class LikesNo extends Component{

render() {
    const {card} = this.props
    return <p className="likes-no">{card.likes} likes</p>
  }
}

export default Likes
