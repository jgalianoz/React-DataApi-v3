import React from 'react'

export default class Index extends React.Component{
	render(){
		return <html lang="en">
			<head>
				<title>{this.props.title}</title>
				<link rel="stylesheet" href="./main.css"/>
				<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css' />
				<link rel="icon" href="./images/logo.png"/>
				<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
			</head>
			<body>
				<section className="Landing home">
					<header className="header">
						<div className="wrapper flex">
							<a href="/">
								<figure className="header-logo">
									<img src="./images/logo.png" alt="Tube-Nice" width="35" height="35"/>
								</figure>
							</a>

							<div className="header-title">
								<h1>{this.props.title}</h1>
							</div>
							
							<a href="https://github.com/ManuelGalindez26/React-DataApi-v3" target="_blank">
								<figure className="header-logo-github">
									<img src="./images/github.png" alt="Tube-Nice" width="35" height="35"/>
								</figure>
							</a>

						</div>
					</header>

					<section id="container"></section>


					<footer className="footer">
						<p>Developed by - 
							<a className="link" href="https://twitter.com/Manuel_Galindez" target="_blank"> @Manuel_Galindez </a>
							with 
							<a className="link" href="https://developers.google.com/youtube/v3" target="_blank"> Api Youtube</a>
						</p>
					</footer>

				</section>

				<script src="build.js"></script>
				
			</body>
		</html>
	}
}