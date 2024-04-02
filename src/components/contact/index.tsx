import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';
import { SessionTitle, Wrapper } from '../../style/Components';

// Icons
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { TfiTwitterAlt } from 'react-icons/tfi';
import { GrLinkedin } from 'react-icons/gr';

const Contact: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<Wrapper>
				<SessionTitle>Follow us on our social networks</SessionTitle>
				<Style.Content>
					<ul>
						<li>
							<a href='#' target='_blank'>
								<FaFacebookSquare />
							</a>
						</li>
						<li>
							<a href='#' target='_blank'>
								<FaSquareWhatsapp />
							</a>
						</li>
						<li>
							<a href='#' target='_blank'>
								<RiInstagramFill />
							</a>
						</li>
						<li>
							<a href='#' target='_blank'>
								<TfiTwitterAlt />
							</a>
						</li>
						<li>
							<a href='#' target='_blank'>
								<GrLinkedin />
							</a>
						</li>
					</ul>
				</Style.Content>
			</Wrapper>
		</Style.Container>
	);
};

export default Contact;
