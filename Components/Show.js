import React from 'react'


export default class Show extends React.Component {
	render(){
		return <li>
			<img src={this.props.snippet.thumbnails.medium.url} />
		</li>
	}
}