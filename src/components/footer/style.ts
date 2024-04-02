import styled from 'styled-components';

export const Container = styled.div`
	padding: 80px 0;
	background-image: linear-gradient(
		to right,
		${(props) => props.theme.color.lemonYellow},
		${(props) => props.theme.color.peachOrange}
	);
`;

export const Content = styled.div`
	display: flex;
	gap: 3rem;
`;

export const Col = styled.div`
	flex: 33%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	color: ${(props) => props.theme.color.deepPurple};

	h4 {
		color: ${(props) => props.theme.color.vividMagenta};
		font-size: ${(props) => props.theme.fontSize.fsLarge};
		font-family: ${(props) => props.theme.fontFamily.lilitaOne};
	}

	p {
		font-weight: ${(props) => props.theme.fontWeight.fwMedium};
		line-height: ${(props) => props.theme.lineHeight.lhMedium};
		text-align: justify;

		&::first-letter {
			margin-left: 2rem;
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	ul li {
		font-weight: ${(props) => props.theme.fontWeight.fwExtraLarge};
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	ul li svg {
		background-color: ${(props) => props.theme.color.vividMagenta};
		font-size: ${(props) => props.theme.fontSize.fsExtraLarge};
		color: ${(props) => props.theme.color.neutralWhite};
		padding: 0.3rem;
		border-radius: ${(props) => props.theme.borderRadius.brLarge};
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	input {
		height: 45px;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: ${(props) => props.theme.borderRadius.brMedium};
		font-size: ${(props) => props.theme.fontSize.fsNormal};
		outline: none;
		border: ${(props) => props.theme.borderWidth.bwMedium} solid transparent;

		&::placeholder {
			color: ${(props) => props.theme.color.vibrantIndigo};
			font-weight: ${(props) => props.theme.fontWeight.fwSmall};
			font-size: ${(props) => props.theme.fontSize.fsNormal};
		}

		&:focus {
			border: ${(props) => props.theme.borderWidth.bwMedium} solid
				${(props) => props.theme.color.vibrantIndigo};
		}
	}
`;
