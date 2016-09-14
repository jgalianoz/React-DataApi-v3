import React from 'react';
import axios from 'axios';
import youtube from 'youtube-finder';

export default class Reproductive extends React.Component {

  constructor(props){
    super(props)
    this.state = JSON.parse( localStorage.getItem('item') );
    this.videoId = this.props.location.query.v;
  }
  componentDidMount(){
    axios({
      method: 'GET',
      url: `http://gdata.youtube.com/feeds/api/videos/${this.videoId}v=2&alt=jsonc`
    }).then((data) => console.log(data))
     .catch((err) => console.log(err))
  }
  render() {
    const client = youtube.createClient({ key: 'AIzaSyACqiYw-u2XLNV_XxVZGABLnqOzBTnIC6s' })
    const url = `https://www.youtube.com/embed/${this.videoId}?rel=0&showinfo=0&controls=1&autoplay=1`;
    if(this.videoId === undefined){
      return <h1>Sorry, no results found</h1>
    } else {

      return <div className='wrapper container-reproductive'>
        <h1>{this.state.snippe && this.state.snippet.title}</h1>
        <div className="video">
          <iframe width="885" height="480" src={url} frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    }

  }
}
