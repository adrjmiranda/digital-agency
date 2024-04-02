import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';

// Images
import Logo from '../../assets/img/logo.png';

const Navbar: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<Style.Logo href='#'>
				<img src={Logo} alt='Logo' />
				<p>
					<span>Digital</span>
					<span>Agency</span>
				</p>
			</Style.Logo>
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
