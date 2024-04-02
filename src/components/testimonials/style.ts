import styled from 'styled-components';

export const Container = styled.div`
	padding: 0 0 80px;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	gap: 2.5rem;
	margin-top: 150px;

	@media screen and (max-width: 940px) {
		flex-direction: column;
	}
`;
