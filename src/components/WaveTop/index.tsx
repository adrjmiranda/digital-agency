import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';

// Images
import WaveTopImg from '../../assets/img/wave-top.png';

const WaveTop: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<img src={WaveTopImg} alt='Wave Top' />
		</Style.Container>
	);
};

export default WaveTop;
