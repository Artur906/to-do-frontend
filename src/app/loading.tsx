import Image from 'next/image';
import logo from '../../public/logo.svg';

export default function Loading() {
	return (
		<div className='w-full h-full transition-all flex justify-center items-center'>
			<Image
				src={logo}
				alt='logo'
				width={100}
				quality={50}
				className='animate-bounce'
				draggable={false}
			/>
		</div>
	);
}
