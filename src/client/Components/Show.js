import React from 'react';
import { Link } from 'react-router';
import Reproductive from './reproductive';

export default class Show extends React.Component {
	render(){

		return <article className="item-videos">
				<Link to={`/video/watch?v=${this.props.video.videoId}`}>
					<figure className="item-videos-avatar">
						<img src={this.props.snippet.thumbnails.medium.url} />
					</figure>

					<h2 className="item-videos-title">{this.props.snippet.title}</h2>

					<div className="item-videos-author">
						<span className="item-videos-author-channel">{this.props.snippet.channelTitle}</span>
					</div>
				</Link>
				
			</article>
		
	}
}