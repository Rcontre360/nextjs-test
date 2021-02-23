import styled, {GlobalStyle} from "styled-components";

export const colors = {
	primary:"#2B2E4A",
	secondary:"#E84545",
	auxiliar:"#903749",
	clear:"#53354A",
	text:"#FF8965"
}

export const Container = styled.div.attrs(props=>({
	flex:props.flex || "row",
	align:props.align || "center"
}))`
	${props=>flexStyle(props.flex,props.align)}
	padding:0.5em;
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