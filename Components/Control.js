import React from 'react'
import Show from './Show'

export default class Control extends React.Component {
	render(){
		return <ul className="List-videos">
			{
				this.props.datos.map( (el) => {
					return <Show 
						video={el.item.id}
						snippet={el.item.snippet} />
				})
			}
		</ul>
	}
}