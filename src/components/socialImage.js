import React, {Component} from 'react';
import heart from './heart.svg';
import filledHeart from './filledHeart.svg';

class SocialImages extends Component{
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
      <div className="image-section">
        <SocialImage card={card} handleClick={this.handleClick} />
        <HeartImage card={card} handleClick={this.handleClick} />
      </div>
)
  }
}


class SocialImage extends Component{

render(){
  const {card} = this.props
  return  <img className="social-image" src={card.image} alt="social image" onClick={() => this.props.handleClick(card.id)} />
}
}


class HeartImage extends Component{

render() {
    const {card} = this.props
    return <img className={card.show ? 'heart-icon-image-appear' : 'heart-icon-image'} src={card.heartIcon} alt="liked heart" onClick={() => this.props.handleClick(card.id)}  />
  }
}


export default SocialImages
