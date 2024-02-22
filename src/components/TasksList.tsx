'use client';
import { useQuery } from '@tanstack/react-query';
import Task from './Task';
import { ITask } from '@/models/Task';
import { api } from '@/lib/axios';

// TO DO: create model task, create connection to backend, get user data

interface TaskListProps {
	authToken: string;
}

export default function TaskList({ authToken }: TaskListProps) {
	const {
		data: tasks,
		isLoading,
		error,
	} = useQuery<ITask[]>({
		queryKey: ['tasks'],
		queryFn: () =>
			api
				.get('tasks', {
					headers: {
						Authorization: `Bearer ${authToken}`,
					},
				})
				.then((res) => res.data),
	});

	if (!isLoading && !error) {
		console.log(tasks);
	}

	return (
		<>
			<div className='bg-zinc-900 h-full w-full overflow-y-scroll relative box-border mt-8'>
				{tasks &&
					tasks
						.filter((task) => !task.completed)
						.map((task, id) => {
							const { completed, due_date, task_name } = task;
							return (
								<Task
									key={id}
									completed={completed}
									due_date={due_date}
									task_id={id}
									task_name={task_name}
								/>
							);
						})}

				<div className='sticky bottom-0 w-full bg-gradient-to-t from-zinc-900 to-transparent h-9'></div>
			</div>
		</>
	);
}
