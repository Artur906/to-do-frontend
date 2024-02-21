import { ITask } from '@/models/Task';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

interface TaskInputProps {
	setTasks: Dispatch<SetStateAction<ITask[]>>;
}

export default function TaskInput({ setTasks }: TaskInputProps) {
	const [newTask, setNewTask] = useState('');

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setTasks((tasks: ITask[]) => [
			...tasks,
			{
				task_name: newTask,
				completed: false,
				due_date: new Date().toISOString(),
			},
		]);
		setNewTask('');
	};

	return (
		<footer className='w-full m-10 flex items-center justify-center'>
			<form onSubmit={onSubmit} className='w-full'>
				<input
					type='datetime-local'
					name='due_date'
					id='due_date'
					className='text-zinc-200 bg-zinc-700'
				/>
				<input
					type='text'
					className='w-full bg-zinc-700 rounded p-4 shadow'
					name='task_name'
					placeholder='Give a name to your new task'
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
				/>
			</form>
		</footer>
	);
}
