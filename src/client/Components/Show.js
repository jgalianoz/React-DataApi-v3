import React from 'react';
import { Link } from 'react-router';

export default class Show extends React.Component {

  render(){

    const { item } = this.props.data;
    const channel = `https://www.youtube.com/channel/${item.snippet.channelId}`;

    return <article className="item-videos">
      <Link to={`/watch?v=${item.id.videoId}`} onClick={() => this.props.handleClick(item)}>

        <figure className="item-videos-avatar">
          <img src={item.snippet.thumbnails.medium.url} />
        </figure>

        <h2 className="item-videos-title">{item.snippet.title}</h2>
      </Link>

      <div className="item-videos-author">
        <a href={channel} className="item-videos-author-channel" target="__blank">{item.snippet.channelTitle}</a>
      </div>

    </article>
  }
}
