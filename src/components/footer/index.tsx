import { FunctionComponent, ReactNode } from 'react';

// Components
import Logo from '../logo';
import WaveTop from '../WaveTop';

// Style
import * as Style from './style';
import { Button, Wrapper } from '../../style/Components';

// Icons
import { TiLocationOutline } from 'react-icons/ti';
import { GiRotaryPhone } from 'react-icons/gi';
import { RiMailSendLine } from 'react-icons/ri';

const Footer: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<WaveTop />
			<Wrapper>
				<Style.Content>
					<Style.Col>
						<Logo />
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
							repudiandae, aliquid molestias, eveniet repellat dolor rem
							similique reprehenderit ipsam a autem voluptates. Harum omnis
							quasi aperiam maiores, adipisci accusantium voluptatum?
						</p>
					</Style.Col>
					<Style.Col>
						<h4>Contact us</h4>
						<ul>
							<li>
								<TiLocationOutline />
								<span>Round Street, 144, New City</span>
							</li>
							<li>
								<GiRotaryPhone />
								<span>+99 1122-3344</span>
							</li>
							<li>
								<RiMailSendLine />
								<span>digitalagency@email.com</span>
							</li>
						</ul>
					</Style.Col>
					<Style.Col>
						<h4>Receive our newsletters</h4>
						<form action='#'>
							<input type='email' name='email' placeholder='Your best email' />
							<Button type='submit'>Subscribe</Button>
						</form>
					</Style.Col>
				</Style.Content>
			</Wrapper>
		</Style.Container>
	);
};

export default Footer;
