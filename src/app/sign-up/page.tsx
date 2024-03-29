import Image from 'next/image';
import logo from '../../../public/logo.svg';
import AuthForm from '@/components/AuthForm';

export default function Page() {
	return (
		<div className='w-full h-full bg-gray-900 bg-gradient-to-r from-slate-950 to-teal-500 flex'>
			<div className='flex items-center justify-center w-7/12'>
				<div className='flex items-center justify-center gap-12'>
					<Image
						src={logo}
						alt='logo image'
						width={380}
						height={380}
						draggable={false}
					/>
					<span
						className='
												font-bold 
												text-9xl 
												line-through
												bg-gradient-to-t 
												from-transparent 
												to-slate-900
												text-transparent 
												bg-clip-text
											'
					>
						TO <br /> DO
					</span>
				</div>
			</div>
			<main className='bg-black/80 w-5/12'>
				<AuthForm mode='signup' />
			</main>
		</div>
	);
}
