import React from 'react';
import youtube from 'youtube-finder';
import Control from './Control';

const client = youtube.createClient({ key: 'AIzaSyACqiYw-u2XLNV_XxVZGABLnqOzBTnIC6s' })

export default class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			data: [] 
		}
		this.DataApi = this.DataApi.bind(this)
		this.sendForm = this.sendForm.bind(this)
	}

	sendForm(ev){
		try {
			ev.preventDefault();
			this.DataApi();


		} catch (err){
			console.log(err);
		}

	}

	DataApi (){

		const query = this.refs.query.value

		const params = {
			part: 'snippet',
			type: 'video',
			q: query,
			maxResults: 12		
		}

		try {

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

		} catch ( err ) {
			console.log(err);
		}
	}

	componentDidMount(){
		try {
			this.DataApi()
		} catch (err) {
			console.log(err)
		}
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
					 onClick={this.sendForm}></button>

				</div>
			</form>

			<Control datos={this.state.data}/>

		</div>
	}
}