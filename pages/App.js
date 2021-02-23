import React from "react";
import axios from "axios";
import {Container,Button,Input,Form,GlobalStyle} from "../components"

class App extends React.Component{

	state = {userName:""}

	setUserName(e){
		this.setState({userName:e.target.value})
	}

	async sendUserName(e){
		e.preventDefault();
		const val = await axios.post(
			"/newUser",
			{userName:this.state.userName}, 
	        {}
	    );
	}

	render(){
		return(
		<Container 
			flex="column" 
			css={`
				h1{
					font-size:500%;
				}
				height:90vh;
			`}
		>
			<GlobalStyle/>
			<h1>React application</h1>
			<Form 
				onSubmit={this.sendUserName.bind(this)}
				css={`
					padding-top:0px;
					&>*{
						margin:1em;
					}
				`}
			>
				<Input 
					onChange={this.setUserName.bind(this)}
					value={this.state.userName}
					css={`
						font-size:200%;
						padding: 0.5em 1em;
					`}
				/>
				<Button 
					type="submit"
					css={`
						font-size:150%;
						padding:0.6em;
					`}
				>
					CREATE
				</Button>
			</Form>
		</Container>
		);
	}
};

export  default App;