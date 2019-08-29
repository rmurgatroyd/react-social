import React, {Component} from 'react';
import './App.css';
import './index.css';
import SocialImages from './components/socialImage';
import Likes from './components/likes';
import heart from './heart.svg';
import filledHeart from './filledHeart.svg'

let data = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Anatomy_of_a_Sunset-2.jpg',
    comment: 'Pretty sunset #holidays #nofomo xxxxx',
    likes: Math.floor(Math.random() * 100),
    liked:false,
    heartIcon: heart,
    show: false,
    id: 0
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/07/11/15/43/pretty-woman-1509956_960_720.jpg',
    comment: 'Sitting in a meadow #meadows #prairiegirl',
    likes: Math.floor(Math.random() * 100),
    liked:true,
    heartIcon: filledHeart,
    show: false,
    id: 1
  },
  {
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/b8/3a/48/pretty-drinks.jpg',
    comment: 'Chilling #cocktailhour #coinlaundry',
    likes: Math.floor(Math.random() * 100),
    liked:false,
    heartIcon: heart,
    show: false,
    id: 2
  },
  {
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/7f/3e/ee/lovely-walks-such-pretty.jpg',
    comment: 'Great holiday #staycation',
    likes: Math.floor(Math.random() * 100),
    liked:false,
    heartIcon: heart,
    show: false,
    id: 3
  },
  {
    image: 'https://www.rd.com/wp-content/uploads/2016/06/06-get-healthy-pretty-summer-feet-sneakers.jpg',
    comment: 'New shoes #boxfresh',
    likes: Math.floor(Math.random() * 100),
    liked:true,
    heartIcon: filledHeart,
    show: false,
    id: 4
  },
]



class App extends Component {
  constructor(props){
    super(props)

  this.state = {
    data : data
  };
}


toggleLike = (id) => {
  let socialCard = this.state.data;
  let correctCard = socialCard.find(c => c.id === id);
  correctCard.liked = !correctCard.liked;


  this.setState({data:socialCard});
  if(correctCard.liked){
    correctCard.likes++;
    correctCard.heartIcon = filledHeart;
    correctCard.show=true;
  } else{
        correctCard.likes--;
        correctCard.heartIcon = heart;
        correctCard.show=false;
  }
}



  render(){
const {card} = this.props;

    const cards = this.state.data.map((card) =>{
    return(
      <div className="each-card" key={card.id}>
        <SocialImages card={card} toggleLike={this.toggleLike} />
        <p className="comment">{card.comment}</p>
        <Likes card={card} toggleLike={this.toggleLike} />
      </div>
    )
  })

  return (
          <div>
          <h1>@social</h1>
          <main className="social-cards">{cards}</main>
          </div>
      );
}
}



export default App;
