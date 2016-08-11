import React from 'react';
import { Link } from 'react-router';

export default class Show extends React.Component {
	render(){

		const channel = `https://www.youtube.com/channel/${this.props.snippet.channelId}`

		return <article className="item-videos">
				<Link to={`/watch?v=${this.props.video.videoId}`}>
					<figure className="item-videos-avatar">
						<img src={this.props.snippet.thumbnails.medium.url} />
					</figure>

					<h2 className="item-videos-title">{this.props.snippet.title}</h2>
				</Link>

					<div className="item-videos-author">
						<a href={channel} className="item-videos-author-channel" target="__blank">{this.props.snippet.channelTitle}</a>
					</div>

			</article>
	}
}