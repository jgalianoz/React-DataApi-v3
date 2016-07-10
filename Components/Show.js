import React from 'react'


export default class Show extends React.Component {
	render(){
		return <li className="item-videos">
			<figure>
				<img src={this.props.snippet.thumbnails.medium.url} />
			</figure>
		</li>
	}
}