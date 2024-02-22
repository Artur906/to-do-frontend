import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Home from './Home';
import { api } from '@/lib/axios';

export default async function Page() {
	const authToken = cookies().get('authToken')?.value;

	if (!authToken) redirect('/sign-up');

	const userData = await api
		.get('user/validate', { headers: { Authorization: `Bearer ${authToken}` } })
		.then((res) => res.data)
		.catch((err) => {
			redirect('/login');
		});

	if (!userData) redirect('/login');

	return <Home authToken={authToken} user={userData.user} />;
}
