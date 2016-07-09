import React from 'react'
import Connection from './Connection'


export default class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			userInput: ""
		}
		this.updateUserInput = this.updateUserInput.bind(this);
	}

	updateUserInput(input){
		this.setState({ userInput: input.target.value })
	}


	render(){
		return <div>
			<input type="text" placeholder="Search" onChange={this.updateUserInput} />
			<Connection userInput={this.state.userInput} />
		</div>
	}
}