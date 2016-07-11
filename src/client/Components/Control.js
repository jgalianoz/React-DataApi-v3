import React from 'react'
import uid from 'uid'
import Show from './Show'

export default class Control extends React.Component {
	render(){
		return <div className="container-videos">
			<ul className="List-videos">
				{
					this.props.datos.map( (el) => {

						let id = uid()

						return <Show 
							key={id}
							video={el.item.id}
							snippet={el.item.snippet} />
					})
				}
			</ul>
		</div>
	}
}