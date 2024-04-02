import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem 1rem;

	@media screen and (max-width: 1280px) {
		flex-wrap: wrap;
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

	@media screen and (max-width: 1280px) {
		display: none;

		&.toggle-menu {
			display: flex;
			width: 100%;
			flex-direction: column;
			margin-top: 2rem;
			gap: 0.5rem;
		}

		&.toggle-menu li {
			padding: 0.5rem;
		}

		&.toggle-menu li:hover {
			background-color: rgba(255, 255, 255, 0.3);
			width: 100%;
			text-align: center;
			border-radius: ${(props) => props.theme.borderRadius.brMedium};
		}
	}
`;

export const ToggleMenu = styled.button`
	border: none;
	background-color: transparent;
	font-size: 2rem;
	color: ${(props) => props.theme.color.neutralWhite};
	cursor: pointer;
	z-index: 1;

	@media screen and (min-width: 1280px) {
		display: none;
	}
`;
