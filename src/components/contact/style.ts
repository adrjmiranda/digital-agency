import styled from 'styled-components';

export const Container = styled.div`
	padding: 80px 0;
`;

export const Content = styled.div`
	ul {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	ul li a {
		font-size: 3rem;
		background-color: ${(props) => props.theme.color.deepPurple};
		color: ${(props) => props.theme.color.neutralWhite};
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		border-radius: ${(props) => props.theme.borderRadius.brMedium};
		transition: ${(props) => props.theme.transitionType.trMedium};
	}

	ul li a:hover {
		transform: scale(1.1);
	}
`;
