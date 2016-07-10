import React from 'react';
import youtube from 'youtube-finder';
import Control from './Control'

const client = youtube.createClient({ key: 'AIzaSyACqiYw-u2XLNV_XxVZGABLnqOzBTnIC6s' })


export default class Connection extends React.Component {
	constructor(props){
		super(props);

		this.state = { data: [] }
		this.DataApi = this.DataApi.bind(this)
	}

	DataApi(){
		let params = {
			part: 'snippet',
			type: 'video',
			q: this.props.userInput,
			maxResults: 20			
		}

		client.search(params, (err, data) => {
			data.items.map( (item) => {

				let new_data = { item: item};
				this.state.data.push( new_data );
				let data_global = this.state.data;
				this.setState({ data: data_global });
			})
		})
	}

	componentDidMount(){
		this.DataApi();
	}

	render(){

		return <div>
			<input type="submit" value="Search" onClick={this.DataApi}/>
			<Control datos={this.state.data}/>
		</div>
	}

}