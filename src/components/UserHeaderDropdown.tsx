'use client';
import Image from 'next/image';
import blankProfile from '../../public/blank-profile.webp';
import { IoIosArrowDown, IoMdSettings } from 'react-icons/io';
import { PiSignOut } from 'react-icons/pi';
import { useState } from 'react';

export default function UserHeaderDropdown() {
	const [active, setActive] = useState(false);

	return (
		<div
			className={`${
				active ? 'rounded-t' : 'rounded'
			} bg-zinc-950 cursor-pointer relative text-sm`}
		>
			<button
				className={'flex items-center p-1.5 gap-2'}
				onClick={() => setActive((state) => !state)}
			>
				<IoIosArrowDown
					size={15}
					className={active ? 'rotate-180 transition-all' : 'transition-all'}
				/>
				<span>Artur Dantas</span>
				<Image
					alt='profile picture'
					src={blankProfile}
					width={30}
					height={30}
					className='rounded'
				/>
			</button>
			{active && (
				<div className='absolute w-full bg-inherit rounded-b flex flex-col items-start p-1.5 gap-2'>
					<button className='flex gap-2 items-center'>
						<IoMdSettings size={15} /> Settings
					</button>
					<button className='flex gap-2 items-center'>
						<PiSignOut size={15} /> Sign Out
					</button>
				</div>
			)}
		</div>
	);
}
