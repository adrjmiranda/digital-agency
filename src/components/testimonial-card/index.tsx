import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';

// Porps
interface TestimonialCardProps {
	id: number;
	text: string;
	userName: string;
	userPhoto: string;
	userOffice: string;
}

const TestimonialCard: FunctionComponent<{ props: TestimonialCardProps }> = ({
	props,
}): ReactNode => {
	return (
		<Style.Container>
			<Style.User>
				<img src={props.userPhoto} alt={props.userName} />
				<span className='user-name'>{props.userName}</span>
				<span className='user-office'>{props.userOffice}</span>
			</Style.User>
			<Style.Testimonial>
				<p>{props.text}</p>
			</Style.Testimonial>
		</Style.Container>
	);
};

export default TestimonialCard;
