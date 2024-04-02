import styled from 'styled-components';

export const Container = styled.div`
	flex: 33%;
	position: relative;
	padding: 60px 1rem 40px;
	box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.1);
	border-radius: ${(props) => props.theme.borderRadius.brMedium};
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const User = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;

	img {
		width: 80px;
		height: 80px;
		object-fit: cover;
		border-radius: 50%;
		border: ${(props) => props.theme.borderWidth.bwLarge} solid
			${(props) => props.theme.color.hotPink};
		position: absolute;
		left: 50%;
		top: -40px;
		transform: translateX(-50%);
	}

	.user-name {
		font-weight: ${(props) => props.theme.fontWeight.fwLarge};
		color: ${(props) => props.theme.color.vibrantIndigo};
	}

	.user-office {
		font-weight: ${(props) => props.theme.fontWeight.fwExtraLarge};
		color: ${(props) => props.theme.color.vividMagenta};
	}
`;

export const Testimonial = styled.div`
	p {
		font-weight: ${(props) => props.theme.fontWeight.fwSmall};
		color: ${(props) => props.theme.color.darkGray};
	}
`;
