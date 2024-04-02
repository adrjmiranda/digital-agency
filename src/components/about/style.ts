import styled from 'styled-components';

export const Container = styled.div`
	padding: 380px 0;
	background-color: rgba(0, 0, 0, 0.05);
	position: relative;
`;

export const Content = styled.div`
	margin-top: 4rem;
	display: flex;
	gap: 4rem;
`;

export const List = styled.div`
	flex: 50%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	z-index: 1;

	h4 {
		font-size: 2.5rem;
		text-transform: capitalize;
		font-family: ${(props) => props.theme.fontFamily.lilitaOne};
		color: ${(props) => props.theme.color.hotPink};
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	ul li {
		font-size: ${(props) => props.theme.fontSize.fsLarge};
		font-weight: ${(props) => props.theme.fontWeight.fwMedium};
		text-transform: capitalize;
		background-color: ${(props) => props.theme.color.skyBlue};
		color: ${(props) => props.theme.color.neutralWhite};
		padding: 0.4rem 0.8rem;
		border-radius: ${(props) => props.theme.borderRadius.brSmall};
		display: flex;
		align-items: center;
		gap: 1rem;
		transition: ${(props) => props.theme.transitionType.trMedium};

		&:hover {
			transform: scale(1.1);
		}
	}

	ul li svg {
		color: ${(props) => props.theme.color.aquaBlue};
		transition: ${(props) => props.theme.transitionType.trMedium};
	}

	ul li:hover svg {
		transform: rotate(45deg);
		color: white;
	}
`;

export const Img = styled.div`
	flex: 50%;

	img {
		max-width: 100%;
	}
`;

export const WaveTop = styled.div`
	img {
		position: absolute;
		top: 0;
	}
`;

export const WaveBottom = styled.div`
	img {
		position: absolute;
		bottom: 0;
	}
`;
