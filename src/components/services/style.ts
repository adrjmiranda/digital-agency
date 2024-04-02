import styled from 'styled-components';

export const Container = styled.div`
	padding: 40px 0;

	button {
		margin: 0 auto;
		display: block;
	}

	@media screen and (max-width: 920px) {
		padding: 0;
	}
`;

export const Content = styled.div`
	display: flex;
	gap: 2rem;
	margin: 4rem 0;

	@media screen and (max-width: 920px) {
		flex-direction: column;
	}
`;
