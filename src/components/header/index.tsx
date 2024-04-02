import { FunctionComponent, ReactNode } from 'react';

// Components
import Navbar from '../navbar';

// Style
import * as Style from './style';
import { Button, Wrapper } from '../../style/Components';

// Images
import HeroBg from '../../assets/img/hero-bg.png';
import WaveBottom from '../../assets/img/wave-bottom.png';

const Header: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<Navbar />
			<Wrapper>
				<Style.Banner>
					<Style.Info>
						<h1>The best digital agency</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
							dolorem? Autem, neque rem quis tempore expedita cum provident
							porro minima eius ipsam beatae ab repellat, sit ea eveniet
							deleniti aliquid.
						</p>
						<Button>Learn more</Button>
					</Style.Info>
					<Style.Img>
						<img src={HeroBg} alt='' />
					</Style.Img>
				</Style.Banner>
			</Wrapper>
			<Style.WaveBottom>
				<img src={WaveBottom} alt='' />
			</Style.WaveBottom>
		</Style.Container>
	);
};

export default Header;
