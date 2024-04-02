import styled from 'styled-components';

// Keyframes
import { SlideInLeft, SlideInRight } from '../../style/Keyframes';

export const Container = styled.div`
	min-height: 100vh;
	background-image: linear-gradient(
		to right,
		${(props) => props.theme.color.hotPink},
		${(props) => props.theme.color.vividMagenta},
		${(props) => props.theme.color.vibrantIndigo}
	);
	position: relative;

	@media screen and (max-height: 950px) {
		padding-bottom: 300px;
	}

	@media screen and (max-width: 1080px) {
		padding-bottom: 380px;
	}
`;

export const Banner = styled.div`
	display: flex;
	gap: 3rem;
	align-items: center;

	@media screen and (max-width: 1080px) {
		flex-direction: column-reverse;
	}
`;

export const Info = styled.div`
	flex: 35%;
	color: ${(props) => props.theme.color.neutralWhite};
	display: flex;
	flex-direction: column;
	gap: 1rem;
	z-index: 1;
	animation: ${SlideInLeft} 1s 0.3s;

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

	@media screen and (max-width: 1080px) {
		flex: 30%;
	}
`;

export const Img = styled.div`
	flex: 65%;
	animation: ${SlideInRight} 1s 0.3s;

	img {
		max-width: 100%;
	}

	@media screen and (max-width: 1080px) {
		flex: 100%;
		display: flex;

		img {
			height: 80%;
		}
	}
`;
