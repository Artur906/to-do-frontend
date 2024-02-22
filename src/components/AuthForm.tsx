'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaEye, FaCheckSquare } from 'react-icons/fa';
import { RiEyeCloseLine } from 'react-icons/ri';
import { api, nextApi } from '@/lib/axios';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { ErrorResponseData } from '@/models/Error';

interface AuthFormProps {
	mode: 'login' | 'signup';
}

const authSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, 'Password should have at least 8 characters'),
});

const signUpSchema = z.object({
	username: z.string().min(4, 'Username should have at least 4 characters'),
	email: z.string().email(),
	password: z.string().min(8, 'Password should have at least 8 characters'),
});

type AuthSchema = z.infer<typeof authSchema>;
type SignUpSchema = z.infer<typeof signUpSchema>;

export default function AuthForm({ mode = 'login' }: AuthFormProps) {
	const router = useRouter();

	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { register, handleSubmit, watch } = useForm<AuthSchema & SignUpSchema>({
		resolver: zodResolver(mode === 'login' ? authSchema : signUpSchema),
	});

	const password = watch('password');

	const headerTitle = { login: 'LOGIN', signup: 'SIGN UP' }[mode];
	const welcomeMessage = {
		login: 'Good to see you again!',
		signup: `Hello! Lets get started`,
	}[mode];
	const redirectMessage = {
		login: 'Do not has a account?',
		signup: `Already has a account?`,
	}[mode];
	const buttonText = { login: 'Login', signup: 'Sign Up' }[mode];

	const onSubmit = async (data: AuthSchema & SignUpSchema) => {
		setIsLoading((state) => !state);
		if (!data.username) {
			const response = await api
				.post('user/login', data)
				.then((response) => response.data)
				.catch((err: AxiosError) => {
					if (err.response) {
						const errResponseData = err.response.data as ErrorResponseData;
						toast.error(errResponseData.message);
					} else if (err.request) {
						console.error(err.request);
						toast.error('Server is out');
					}
				});

			if (response.token)
				await nextApi.post('cookie', {
					token: response.token,
				});
			router.push('/');
		} else {
			await api
				.post('user/register', data)
				.then((response: any) => {
					toast.success(response.data.message, { position: 'top-center' });
					router.push('/login');
				})
				.catch((err: AxiosError) => {
					if (err.response) {
						const errResponseData = err.response.data as ErrorResponseData;
						toast.error(errResponseData.message);
					} else if (err.request) {
						console.error(err.request);
						toast.error('Server is out');
					}
				});
		}

		setIsLoading((state) => !state);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='p-24 w-full h-full flex flex-col justify-center'
		>
			<header className='mb-16'>
				<h1 className='font-bold text-5xl mb-2'>{headerTitle}</h1>
				<p>{welcomeMessage}</p>
			</header>

			{mode === 'signup' && (
				<>
					<label htmlFor='username'>Username</label>
					<div className='mb-8 w-full flex flex-col'>
						<input
							type='text'
							id='username'
							autoComplete='off'
							{...register('username')}
							placeholder='Garibaldo'
							className='p-1 rounded text-gray-950'
						/>

						<span className='flex gap-1 items-center text-sm text-zinc-300 mt-1'>
							<FaCheckSquare
								size={15}
								className={
									!watch().username || watch().username.length < 4
										? 'fill-zinc-400'
										: 'fill-green-500'
								}
							/>
							at least 4 characters
						</span>
					</div>
				</>
			)}

			<label htmlFor='email'>Email</label>
			<input
				type='email'
				id='email'
				autoComplete='on'
				{...register('email')}
				placeholder='example@gmail.com'
				className='p-1 mb-8 rounded text-gray-950'
			/>

			<label htmlFor='password'>Password</label>
			<div className='mb-16 relative h-fit'>
				<input
					type={showPassword ? 'text' : 'password'}
					id='password'
					{...register('password')}
					placeholder='my super password'
					className='p-1 rounded text-gray-950 w-full'
				/>
				<button
					type='button'
					onClick={() => setShowPassword((value) => !value)}
					className='absolute right-1 top-1 text-gray-950'
				>
					{showPassword ? <RiEyeCloseLine size={24} /> : <FaEye size={24} />}
				</button>

				{mode === 'signup' && (
					<span className='flex gap-1 items-center text-sm text-zinc-300 mt-1'>
						<FaCheckSquare
							size={15}
							className={
								!password || password.length < 8
									? 'fill-zinc-400'
									: 'fill-green-500'
							}
						/>
						at least 8 characters
					</span>
				)}
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
					disabled={isLoading}
					className='py-3 px-7 bg-gray-950 rounded transition-all hover:bg-teal-400 hover:text-gray-950 disabled:bg-zinc-500'
				>
					{isLoading ? 'wait...' : buttonText}
				</button>
			</footer>
		</form>
	);
}
