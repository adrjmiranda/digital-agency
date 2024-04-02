import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';

// Images
import LogoImg from '../../assets/img/logo.png';

const Logo: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container href='#'>
			<img src={LogoImg} alt='Logo' />
			<p>
				<span>Digital</span>
				<span>Agency</span>
			</p>
		</Style.Container>
	);
};

export default Logo;
