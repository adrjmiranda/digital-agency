import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem 1rem;
`;

export const Logo = styled.a`
	display: flex;
	align-items: center;
	gap: 0.8rem;
	z-index: 1;

	img {
		height: 40px;
	}

	p {
		display: flex;
		gap: 0.5rem;
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

export const Menu = styled.ul`
	display: flex;
	align-items: center;
	gap: 1rem;
	z-index: 2;

	li a {
		color: ${(props) => props.theme.color.neutralWhite};
		font-weight: ${(props) => props.theme.fontWeight.fwMedium};
		transition: ${(props) => props.theme.transitionType.trSmall};
	}
`;
