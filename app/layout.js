import './globals.css';

import Navbar from '@/components/Navbar';
import { Montserrat_Alternates } from 'next/font/google';

const montserrat = Montserrat_Alternates({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'PortfolioV',
	description: 'Portfolio of Viktor',
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<div className='w-screen h-screen bg-gradient-to-b from-pink-100 to-sky-200'>
					<div className='h-24 px-[5%] max-w-[1920px] mx-auto'>
						<Navbar />
					</div>
					<div className='h-[calc(100vh-6rem)] px-[5%] max-w-[1920px] mx-auto'>
						{children}
					</div>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
