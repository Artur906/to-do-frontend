import { redirect } from 'next/navigation';

export default function Page() {
	redirect('/sign-in');

	return <h1>Heloooo</h1>;
}
