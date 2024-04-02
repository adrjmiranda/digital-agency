import { FunctionComponent, ReactNode } from 'react';

// Components
import Logo from '../logo';

// Style
import * as Style from './style';

const Navbar: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<Logo />
			<Style.Menu>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>Services</a>
				</li>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Testimonials</a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
			</Style.Menu>
		</Style.Container>
	);
};

export default Navbar;
