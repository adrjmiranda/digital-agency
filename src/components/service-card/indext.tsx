import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';

// Icons
import { IconContext } from 'react-icons';
import { SiCoinmarketcap, SiBrandfolder } from 'react-icons/si';
import { FaBuysellads } from 'react-icons/fa';

// Props
interface ServiceCardProps {
	icon: string;
	title: string;
	description: string;
}

const ServiceCard: FunctionComponent<{ props: ServiceCardProps }> = ({
	props,
}): ReactNode => {
	return (
		<Style.Container>
			<IconContext.Provider value={{ size: '2em' }}>
				{props.icon === 'SiCoinmarketcap' && <SiCoinmarketcap />}
				{props.icon === 'SiBrandfolder' && <SiBrandfolder />}
				{props.icon === 'FaBuysellads' && <FaBuysellads />}
			</IconContext.Provider>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</Style.Container>
	);
};

export default ServiceCard;
