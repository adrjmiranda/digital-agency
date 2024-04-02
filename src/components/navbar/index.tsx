import { FunctionComponent, ReactNode, useState } from 'react';

// Components
import Logo from '../logo';

// Style
import * as Style from './style';

// Icons
import { ImMenu } from 'react-icons/im';

const Navbar: FunctionComponent = (): ReactNode => {
	const [visibilityMenu, setVisibilityMenu] = useState<boolean>(false);

	return (
		<Style.Container>
			<Logo />
			<Style.ToggleMenu
				type='button'
				onClick={() => setVisibilityMenu(!visibilityMenu)}
			>
				<ImMenu />
			</Style.ToggleMenu>
			<Style.Menu className={visibilityMenu ? 'toggle-menu' : ''}>
				<li>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#services'>Services</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#testimonials'>Testimonials</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</Style.Menu>
		</Style.Container>
	);
};

export default Navbar;
