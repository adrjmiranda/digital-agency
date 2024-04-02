import { FunctionComponent, ReactNode } from 'react';

// Components
import WaveTop from '../WaveTop';
import WaveBottom from '../WaveBottom';

// Style
import * as Style from './style';
import { SessionTitle, Wrapper } from '../../style/Components';

// Images
import OurAgency from '../../assets/img/our-agency.png';

// Icons
import { SiAntdesign } from 'react-icons/si';

const About: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<WaveTop />
			<Wrapper>
				<SessionTitle>Why choose us?</SessionTitle>
				<Style.Content>
					<Style.List>
						<h4>Our difference</h4>
						<ul>
							<li>
								<SiAntdesign />
								<span>Customized strategy</span>
							</li>
							<li>
								<SiAntdesign />
								<span>Innovative creativity</span>
							</li>
							<li>
								<SiAntdesign />
								<span>Attractive design</span>
							</li>
							<li>
								<SiAntdesign />
								<span>Cutting-edge technology</span>
							</li>
							<li>
								<SiAntdesign />
								<span>Captivating content</span>
							</li>
							<li>
								<SiAntdesign />
								<span>Impactful social presence</span>
							</li>
							<li>
								<SiAntdesign />
								<span>Measurable results</span>
							</li>
						</ul>
					</Style.List>
					<Style.Img>
						<img src={OurAgency} alt='Our Agency' />
					</Style.Img>
				</Style.Content>
			</Wrapper>
			<WaveBottom />
		</Style.Container>
	);
};

export default About;
