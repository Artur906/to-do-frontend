import Image from 'next/image';
import logo from '../../public/logo.svg';
import UserHeaderDropdown from './UserHeaderDropdown';

export default function Header() {
	return (
		<header className='bg-inherit bg-gradient-to-r from-teal-800 to-teal-500 w-full'>
			<div className='py-3 w-full h-[97%] bg-zinc-900 flex justify-between items-center'>
				{/* logo */}
				<div className='flex items-center gap-2'>
					<Image
						src={logo}
						alt='logo em formato de checkbox'
						height={36}
						className='rounded-lg'
					/>
					<span className='font-extrabold text-2xl line-through bg-gradient-to-r from-teal-800 to-teal-500 text-transparent bg-clip-text'>
						TO DO
					</span>
				</div>

				{/* user profile*/}
				<UserHeaderDropdown />
			</div>
		</header>
	);
}
