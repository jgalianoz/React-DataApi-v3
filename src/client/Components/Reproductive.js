import React from 'react';

export default class Reproductive extends React.Component {

	constructor(props){
		super(props)
		this.videoId = this.props.location.query.v;
	}

	render() {

		const url = `https://www.youtube.com/embed/${this.videoId}?rel=0&showinfo=0&controls=1&autoplay=1`;

		if(this.videoId === undefined){
			return <h1>Sorry, no results found</h1>
		} else {

			return <div className='wrapper container-reproductive'>
				<div className="video">
					<iframe width="885" height="480" src={url} frameBorder="0" allowFullScreen></iframe>
				</div>
			</div>
		}

	}
}
