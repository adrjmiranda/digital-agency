import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';
import { Button, SessionTitle, Wrapper } from '../../style/Components';

// Data
import servicesData from '../../assets/data/services';
import ServiceCard from '../service-card/indext';

const Services: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container id='services'>
			<Wrapper>
				<SessionTitle>Our services</SessionTitle>
				<Style.Content>
					{servicesData.length > 0 &&
						servicesData.map((data) => (
							<ServiceCard props={data} key={data.id} />
						))}
				</Style.Content>
				<Button>All services</Button>
			</Wrapper>
		</Style.Container>
	);
};

export default Services;
