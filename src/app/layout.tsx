import ReduxProvider from '@/client/providers/redux-provider';
import Header from '@/components/pages/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/main.scss';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
	title: 'Hungman 👻',
	description: 'A funny next.js project to guess the word',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='dark' suppressHydrationWarning>
			<body className={inter.className}>
				<ReduxProvider>
					<Header />
					{children}
				</ReduxProvider>
			</body>
		</html>
	);
}
