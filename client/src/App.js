import React from "react";
import {Container,Button,Input,Form,GlobalStyle} from "./components"

class App extends React.Component{

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
			<Form css={`
				padding-top:0px;
				&>*{
					margin:1em;
				}
			`}>
				<Input 
					css={`
						font-size:200%;
						padding: 0.5em 1em;
					`}
				/>
				<Button 
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