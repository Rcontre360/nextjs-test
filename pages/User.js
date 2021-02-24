import React from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import {Container,Button,Input,Form,GlobalStyle} from "../components"
import firebase from "../firebase";

const User = (props)=>{

	const {asPath} = useRouter();
	const URL = asPath.split("/");
	const userName = URL[URL.length-1];
	
	const createDynamicLink = async e=>{
		e.preventDefault()
		try {
			const val = await axios.post(
				"https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyBcqYmqeUUGVJTR3ahJ9O7v9Mxet5hcmOY",
				{userName:this.state.userName}, 
		        {
				  "dynamicLinkInfo": {
					    "domainUriPrefix": "https://www.theveganbakesale.page.link",
					    "link": asPath,
					    "androidInfo": {
					      "androidPackageName": "com.theveganbakesale.android"
					    },
					    "iosInfo": {
					      "iosBundleId": "com.theveganbakesale.ios"
					    }
				   }
				}
		    );
		} catch(err){
			console.log("ERROR:",err);
		}
	}

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
		<h1>{`This page is for ${userName}`}</h1>
		<Form 
			onSubmit={createDynamicLink}
			css={`
				padding-top:0px;
				&>*{
					margin:1em;
				}
			`}
		>
			<Button 
				type="submit"
				css={`
					font-size:150%;
					padding:0.6em;
				`}
			>
				SHARE
			</Button>
		</Form>
	</Container>
	);
};

export  default User;