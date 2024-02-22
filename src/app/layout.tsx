import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'TO DO',
	description: 'A simple to do list application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Toaster
					position='top-center'
					toastOptions={{
						style: {
							background: 'rgba(0, 0, 0, 0.8)',
							color: 'white',
							borderRadius: '.25rem',
							width: 'fit-content',
						},
					}}
				/>
				{children}
			</body>
		</html>
	);
}
