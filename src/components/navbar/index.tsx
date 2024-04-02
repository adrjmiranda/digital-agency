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
