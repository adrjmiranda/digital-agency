import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	background-image: linear-gradient(
		to right,
		${(props) => props.theme.color.hotPink},
		${(props) => props.theme.color.vividMagenta},
		${(props) => props.theme.color.vibrantIndigo}
	);
	position: relative;
`;

export const Banner = styled.div`
	display: flex;
	gap: 3rem;
	align-items: center;
`;

export const Info = styled.div`
	flex: 35%;
	color: ${(props) => props.theme.color.neutralWhite};
	display: flex;
	flex-direction: column;
	gap: 1rem;
	z-index: 1;

	h1 {
		font-size: 3.5rem;
		text-transform: uppercase;
		font-family: ${(props) => props.theme.fontFamily.lilitaOne};
	}

	p {
		font-weight: ${(props) => props.theme.fontWeight.fwNormal};
		font-size: ${(props) => props.theme.fontSize.fsMedium};
		line-height: ${(props) => props.theme.lineHeight.lhSmall};
	}
`;

export const Img = styled.div`
	flex: 65%;

	img {
		max-width: 100%;
	}
`;

export const WaveBottom = styled.div`
	img {
		position: absolute;
		bottom: 0;
	}
`;
