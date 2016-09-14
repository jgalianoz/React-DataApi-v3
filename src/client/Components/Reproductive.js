import React from 'react';

export default class Reproductive extends React.Component {

  constructor(props){
    super(props)
    this.state = JSON.parse( localStorage.getItem('item') );
    this.videoId = this.props.location.query.v;
  }

  render() {
    const url = `https://www.youtube.com/embed/${this.videoId}?rel=0&showinfo=0&controls=1&autoplay=1`;

    let date = new Date(`${this.state.snippet.publishedAt}`);
    let publish  = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;



    if(this.videoId === undefined){
      return <h1>Sorry, no results found</h1>
    } else {

      return <div className='wrapper container-reproductive'>

        <div className="video">
          <iframe width="768" height="400" src={url} frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="containerDataVideo">
          <div className="containerDataVideo-containerTitle">
            <h3 className="containerDataVideo-containerTitle-title">
              { this.state.snippet && this.state.snippet.title }
            </h3>
          </div>

          <div>
            <a href={`https://www.youtube.com/channel/${this.state.snippet.channelId}`}
              className="item-videos-author-channel"
              target="__blank">
              { this.state.snippet.channelTitle }
            </a>
          </div>

          <div className="containerDataVideo-containerTimePublish">
            <p>
              Publicado el  <span className="containerDataVideo-containerTimePublish-time">
                              { publish }
                            </span>
            </p>
          </div>

          <div className="containerDataVideo-containerDescription">
            <p className="containerDataVideo-containerDescription-description">
              { this.state.snippet.description }
            </p>
          </div>

        </div>
      </div>
    }

  }
}
