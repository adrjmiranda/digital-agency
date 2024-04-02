import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100vw;
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 1rem;
`;

export const Button = styled.button`
	border: none;
	background-image: linear-gradient(
		to right,
		${(props) => props.theme.color.deepPurple},
		${(props) => props.theme.color.vibrantIndigo}
	);
	padding: 1rem 2rem;
	border-radius: ${(props) => props.theme.borderRadius.brMedium};
	color: ${(props) => props.theme.color.neutralWhite};
	font-size: ${(props) => props.theme.fontSize.fsMedium};
	transition: ${(props) => props.theme.transitionType.trMedium};
	cursor: pointer;

	&:hover {
		background-image: linear-gradient(
			to left,
			${(props) => props.theme.color.deepPurple},
			${(props) => props.theme.color.vibrantIndigo}
		);
	}
`;

export const SessionTitle = styled.h2`
	text-align: center;
	font-size: 3rem;
	font-weight: ${(props) => props.theme.fontWeight.fwMedium};
	font-family: ${(props) => props.theme.fontFamily.lilitaOne};
	color: ${(props) => props.theme.color.vividMagenta};
	margin: 2rem 0;
	text-transform: capitalize;
`;
