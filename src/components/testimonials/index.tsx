import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';
import { SessionTitle, Wrapper } from '../../style/Components';

// Data
import testimonialsData from '../../assets/data/testimonials';
import TestimonialCard from '../testimonial-card';

const Testimonials: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container id='testimonials'>
			<Wrapper>
				<SessionTitle>See what our customers are saying</SessionTitle>
				<Style.Content>
					{testimonialsData.length > 0 &&
						testimonialsData.map((data) => (
							<TestimonialCard props={data} key={data.id} />
						))}
				</Style.Content>
			</Wrapper>
		</Style.Container>
	);
};

export default Testimonials;
