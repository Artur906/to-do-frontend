'use client';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { RiEyeCloseLine } from 'react-icons/ri';

const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
	e.preventDefault();

	console.log('uepaaaaa');
};

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<form
			onSubmit={onSubmit}
			className='p-24 w-full h-full flex flex-col justify-center'
		>
			<header className='mb-16'>
				<h1 className='font-bold text-5xl mb-2'>LOGIN</h1>
				<p>Good to see you again!</p>
			</header>

			<label htmlFor='email'>Email</label>
			<input
				type='email'
				id='email'
				placeholder='example@gmail.com'
				className='p-1 mb-8 rounded text-gray-950'
			/>

			<label htmlFor='password'>Password</label>
			<div className='mb-16 relative h-fit'>
				<input
					type={showPassword ? 'text' : 'password'}
					id='password'
					placeholder='my super password'
					className='p-1 rounded text-gray-950 absolute w-full'
				/>
				<button
					onClick={() => setShowPassword((value) => !value)}
					className='absolute right-1 top-1 text-black'
				>
					{showPassword ? <RiEyeCloseLine size={24} /> : <FaEye size={24} />}
				</button>
			</div>

			<footer className='flex items-center justify-between'>
				<p>
					Dont has a account?{' '}
					<Link href={'/sign-in'} className='font-bold hover:text-teal-400'>
						Sign In
					</Link>
				</p>

				<button
					type='submit'
					className='py-3 px-7 bg-gray-950 rounded transition-colors hover:bg-teal-400 hover:text-gray-950'
				>
					Login
				</button>
			</footer>
		</form>
	);
}
