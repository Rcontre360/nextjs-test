import React from "react";
import {Container,Button,Input,Form,GlobalStyle} from "../components"

class App extends React.Component{

	state = {userName:""}

	setUserName(e){
		this.setState({userName:e.target.value})
	}

	sendUserName(e){
		e.preventDefault();
		fetch("/newUser",{
			method:"POST",
			body:{
				user:this.state.userName
			}
		}).then(res=>res.json())
		.then(res=>console.log("sent ",res))
		.catch(err=>console.log("ERROR:",err));
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