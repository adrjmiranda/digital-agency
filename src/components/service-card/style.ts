import styled from 'styled-components';

export const Container = styled.div`
	flex: 33%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	padding: 1.5rem 1rem;
	box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.1);
	border-radius: ${(props) => props.theme.borderRadius.brLarge};
	transition: ${(props) => props.theme.transitionType.trMedium};

	svg {
		font-size: 3.5rem;
		padding: 1rem;
		border-radius: ${(props) => props.theme.borderRadius.brLarge};
		color: ${(props) => props.theme.color.neutralWhite};
		background-image: linear-gradient(
			to right,
			${(props) => props.theme.color.deepPurple},
			${(props) => props.theme.color.vibrantIndigo}
		);
		transition: ${(props) => props.theme.transitionType.trMedium};
	}

	h3 {
		font-size: ${(props) => props.theme.fontSize.fsMedium};
		font-weight: ${(props) => props.theme.fontWeight.fwMedium};
		text-transform: uppercase;
		text-align: center;
	}

	p {
		text-align: center;
		color: ${(props) => props.theme.color.darkGray};
		font-weight: ${(props) => props.theme.fontWeight.fwSmall};
		line-height: ${(props) => props.theme.lineHeight.lhSmall};
	}

	&:hover {
		transform: scale(1.1);
		cursor: pointer;
	}

	&:hover svg {
		transform: scale(1.15);
		background-image: linear-gradient(
			to right,
			${(props) => props.theme.color.vibrantIndigo},
			${(props) => props.theme.color.deepPurple}
		);
	}
`;
