import styled from 'styled-components';

export const Container = styled.a`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	z-index: 1;

	img {
		height: 40px;
	}

	p {
		display: flex;
		gap: 0.3rem;
	}

	p span {
		font-family: ${(props) => props.theme.fontFamily.lilitaOne};
		color: ${(props) => props.theme.color.neutralWhite};
		font-size: ${(props) => props.theme.fontSize.fsExtraLarge};
	}

	p span:nth-child(1) {
		color: ${(props) => props.theme.color.vibrantIndigo};
	}

	p span:nth-child(2) {
		color: ${(props) => props.theme.color.peachOrange};
	}
`;
