import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem 1rem;
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
