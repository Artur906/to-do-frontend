import Header from '@/components/Header';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Page() {
	if (!cookies().get('authToken')) redirect('/sign-in');

	return (
		<main className='w-8/12 max-w-4x m-auto h-full flex flex-col justify-between  items-center'>
			<Header />
			<div>tasks</div>
			<footer>input de nova task</footer>
		</main>
	);
}
