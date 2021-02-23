import React from "react"
import styled, {createGlobalStyle,css} from "styled-components";

export const colors = {
	primary:"#1b262c",
	secondary:"#0f4c75",
	auxiliar:"#3282b8",
	clear:"#bbe1fa",
	text:"#F0F0F0"
}

const stylesFunction = props=>{
	return css`
		${props.css}
	`;
}

export const flexStyle = (dir="row",align="center")=>{
	let alignItems = `align-items:${align};`
	if (dir==="row" || dir==="row-reverse")
			alignItems = `align-items: center;`

	return`
	display: flex;
	flex-direction: ${dir};
	justify-content: ${align};
	${alignItems}
	`
}

export const Container = styled.div.attrs(props=>({
	flex:props.flex || "row",
	align:props.align || "center"
}))`
	${props=>flexStyle(props.flex,props.align)}
	padding:0.5em;
	${stylesFunction}
`

export const Button = styled.button`
	background:${colors["auxiliar"]};
	color:${colors["text"]};
	border:none;
	border-radius:5px;
	padding:5px;
	outline:none;
	${stylesFunction}
`


const BaseInput = props=>{
	const {name,Input,...rest} = props;

	return(
	<React.Fragment>
		<label htmlFor={name} >{name}</label>
		{Input?<Input id={name} {...rest}/>:<input id={name} {...rest}/>}
	</React.Fragment>
	);
}

export const Form = styled.form`
	${flexStyle("column","space-between")}
	padding:0.8em;
	${stylesFunction}
`

export const Input = styled(BaseInput)`
	padding:0.2em;
	border-radius:5px;
	color:${colors["text"]};
	background:${colors["clear"]};
	outline:none;
	margin:0.3em;
	${stylesFunction}
`

export const GlobalStyle = createGlobalStyle`
	*{
		padding:0;
		margin: 0;
	}

	body{
		background: ${colors["primary"]};
		color:${colors["text"]};
		font-weight: 200;
		font-family: calibri;
	}

	li{
		list-style: none;
	}

	a,a:visited{
		text-decoration: none;
		color:${colors["text"]};
	}
`;