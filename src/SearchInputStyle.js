import styled from 'styled-components';

export const Input = styled.input`
	width: 350px;
	height: 51px;
	padding: 10px;
	background: #f3f3f3;
	box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	border: none;
    position: relative;
`;

export const Ul = styled.ul`
	display: contents;
`;

export const Li = styled.ul`
	
	font-weight: bold;
	height: 51px;
	padding: 10px;
	background: #000;
	display: block;
	border-bottom: 1px solid white;
	&:hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.14);
	}
`;

export const SuggestContainer = styled.div`
	height: 240px;

	overflow: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`;

export const MainWrapper = styled.div`

`;