'use client';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { RiEyeCloseLine } from 'react-icons/ri';

const onSubmit = async (
	e: FormEvent<HTMLFormElement>,
	mode: 'login' | 'signup'
) => {
	e.preventDefault();

	if (mode === 'login') {
		console.log('login');
	} else {
		console.log('signup');
	}
};

interface AuthFormProps {
	mode: 'login' | 'signup';
}

export default function AuthForm({ mode = 'login' }: AuthFormProps) {
	const [showPassword, setShowPassword] = useState(false);

	const headerTitle = { login: 'LOGIN', signup: 'SIGN UP' }[mode];
	const welcomeMessage = {
		login: 'Good to see you again!',
		signup: `Hello! Lets get started`,
	}[mode];

	const redirectMessage = {
		login: 'Do not has a account?',
		signup: `Already has a account?`,
	}[mode];

	return (
		<form
			onSubmit={(e) => onSubmit(e, mode)}
			className='p-24 w-full h-full flex flex-col justify-center'
		>
			<header className='mb-16'>
				<h1 className='font-bold text-5xl mb-2'>{headerTitle}</h1>
				<p>{welcomeMessage}</p>
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
					{redirectMessage}{' '}
					<Link
						href={mode === 'login' ? '/sign-up' : '/login'}
						className='font-bold hover:text-teal-400'
					>
						{mode === 'login' ? 'Sign Up' : 'Login'}
					</Link>
				</p>

				<button
					type='submit'
					className='py-3 px-7 bg-gray-950 rounded transition-colors hover:bg-teal-400 hover:text-gray-950'
				>
					{mode === 'login' ? 'Login' : 'Sign Up'}
				</button>
			</footer>
		</form>
	);
}
