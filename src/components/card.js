import React, {Component} from 'react';
import HeartButton from './heartButton'

class Card extends Component {
  render(){
    const {socialData} = this.props

    return (
      <div>
      <h1>@social</h1>
      <SocialCards socialData = {socialData} />
      </div>
    )
}
}
    const SocialCards = props => {
      const cards = props.socialData.map((card,index) =>{
      return(
        <div className="each-card" key={index}>
        <img className="social-image" src={card.image} alt="social image" />
        <p className="comment">{card.comment}</p>
        <HeartButton />
        </div>
      )

    }
  )
  return <main className="social-cards">{cards}</main>
  }





export default Card
