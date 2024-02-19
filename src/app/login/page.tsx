import AuthForm from '@/components/AuthForm';

export default function Page() {
	return (
		<div className='w-full h-full bg-gray-900 bg-gradient-radial  from-teal-500 to-slate-950 flex justify-center items-center'>
			<main className='bg-black/80 w-5/12 max-w-2xl h-fit rounded shadow-md'>
				<AuthForm mode='login' />
			</main>
		</div>
	);
}
