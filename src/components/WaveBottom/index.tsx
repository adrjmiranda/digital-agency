import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';

// Images
import WaveBottomImg from '../../assets/img/wave-bottom.png';

const WaveBottom: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<img src={WaveBottomImg} alt='Wave Bottom' />
		</Style.Container>
	);
};

export default WaveBottom;
