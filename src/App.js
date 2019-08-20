import React, {Component} from 'react';
import './App.css';
import './index.css';
import Card from './components/card';

class App extends Component {
  render(){

    const data = [
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Anatomy_of_a_Sunset-2.jpg',
        comment: 'Pretty sunset #holidays #nofomo xxxxx',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/07/11/15/43/pretty-woman-1509956_960_720.jpg',
        comment: 'Sitting in a meadow #meadows #prairiegirl',
      },
      {
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/b8/3a/48/pretty-drinks.jpg',
        comment: 'Chilling #cocktailhour #coinlaundry',
      },
      {
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/7f/3e/ee/lovely-walks-such-pretty.jpg',
        comment: 'Great holiday #staycation',
      },
      {
        image: 'https://www.rd.com/wp-content/uploads/2016/06/06-get-healthy-pretty-summer-feet-sneakers.jpg',
        comment: 'New shoes #boxfresh',
      },
    ]

  return (
    <div>

      <Card socialData = {data} />
    </div>
  );
}
}

export default App;
