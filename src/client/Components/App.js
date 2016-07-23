import React from 'react';
import youtube from 'youtube-finder';
import Control from './Control';

const client = youtube.createClient({ key: 'AIzaSyACqiYw-u2XLNV_XxVZGABLnqOzBTnIC6s' })


export default class App extends React.Component {

	constructor(props){
		super(props);

		this.state = { data: [] }
		this.DataApi = this.DataApi.bind(this)
		this.onSearch = this.onSearch.bind(this)
	}

	DataApi (){

		const value = this.refs.query.value
	
		let params = {
			part: 'snippet',
			type: 'video',
			q: value,
			maxResults: 15		
		}

		client.search(params, (err, data) => {

			if (err) console.log(err)

			this.setState({data: [] })

			data.items.map( (item) => {

				let new_data = { item: item };
				this.state.data.push( new_data );
				let data_global = this.state.data;
				this.setState({ data: data_global });

			})
		})
	}

	onSearch(ev){
		ev.preventDefault();
		this.DataApi();
	}

	componentDidMount(){
		this.DataApi();
	}

	render(){
		return <div className="wrapper">
			<form action="#" className="query">
				<div className="inputContainer">
					<input
					 id="search"
					 type="text"
					 name="query"
					 ref="query"
					 placeholder="Find your favorite video..."/>

					<button
					 className="icon-search send"
					 type="submit"
					 onClick={this.onSearch}></button>
			
				</div>
			</form>

			<Control datos={this.state.data}/>

		</div>
	}
}