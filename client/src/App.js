import React from "react";
import {Container,Button,Input,Form,GlobalStyle} from "./components"

class App extends React.Component{

	render(){
		return(
		<Container flex="column">
			<GlobalStyle/>
			<h1>React application</h1>
			<Form css={`
				padding-top:0px;
				&>*{
					margin:1em;
				}
			`}>
				<Input/>
				<Button>
					CREATE
				</Button>
			</Form>
		</Container>
		);
	}
};

export  default App;