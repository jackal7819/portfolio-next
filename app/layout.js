import './globals.css';

import { Montserrat_Alternates } from 'next/font/google';

const montserrat = Montserrat_Alternates({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'VPortfolio',
	description: 'Portfolio of Viktor',
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body className={montserrat.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
