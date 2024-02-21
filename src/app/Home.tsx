'use client';
import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import Header from '../components/Header';
import TaskList from '../components/TasksList';
import { useState } from 'react';
import { ITask } from '@/models/Task';
import TaskInput from '@/components/TaskInput';

export default function Home() {
	const [tasks, setTasks] = useState<ITask[]>([
		{
			task_name: 'first fake task',
			completed: false,
			due_date: new Date().toISOString(),
		},
	]);

	return (
		<main className='w-8/12 max-w-4x m-auto h-full flex flex-col items-center relative'>
			<QueryClientProvider client={queryClient}>
				<Header />
				<TaskList tasks={tasks} />
				<TaskInput setTasks={setTasks} />
			</QueryClientProvider>
		</main>
	);
}
