import { FunctionComponent, ReactNode } from 'react';

// Components
import Header from './components/header';
import Services from './components/services';
import About from './components/about';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';

const App: FunctionComponent = (): ReactNode => {
	return (
		<div>
			<Header />
			<Services />
			<About />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
