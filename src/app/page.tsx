import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Home from './Home';

export default function Page() {
	if (!cookies().get('authToken')) redirect('/sign-up');

	return <Home />;
}
