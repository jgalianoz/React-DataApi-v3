import React from 'react';
import uid from 'uid';
import Show from './Show';

export default class Control extends React.Component {
	render(){

		let items = this.props.datos;

		return <div className="container-videos">
			{
				items.map( (el) => {

					let id = uid()

					return <Show
						key={id}
						video={el.item.id}
						snippet={el.item.snippet} />
				})
			}
		</div>
	}
}
