import React from 'react'
import youtube from 'youtube-finder';
import Control from './Control'

const client = youtube.createClient({ key: 'AIzaSyACqiYw-u2XLNV_XxVZGABLnqOzBTnIC6s' })


export default class App extends React.Component {

	constructor(props){
		super(props);

		this.state = { data: [] }
		this.DataApi = this.DataApi.bind(this)
	}

	/*updateUserInput(input){
		console.log(input.target.value)

		let value = input.target.value

		DataApi(value)
	}*/

	DataApi (ev){

		ev.preventDefault();

		const value = this.refs.query.value

		if (value === ''){
			alert('busuqeda vacia');
			return;
		}

		let params = {
			part: 'snippet',
			type: 'video',
			q: value,
			maxResults: 5			
		}

		client.search(params, (err, data) => {
			data.items.map( (item) => {

				let new_data = { item: item };
				this.state.data.push( new_data );
				let data_global = this.state.data;
				this.setState({ data: data_global });
			})
		})
	}

	/*componentDidMount(){
		this.DataApi();
	}*/

	render(){
		return <div className="wrapper">
			<form action="#" className="query" onSubmit={this.DataApi}>
				<div className="inputContainer">
					<input
					 id="search"
					 type="text"
					 name="query"
					 ref="query"
					 placeholder="Search"/>

					<button
					 className="icon-search send"
					 type="submit"
					 onClick={this.DataApi}></button>
			
				</div>
			</form>

			<Control datos={this.state.data}/>

		</div>
	}
}