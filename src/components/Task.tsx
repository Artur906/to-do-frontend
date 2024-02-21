'use client';

import { useState } from 'react';

interface taskProps {
	task_id: number;
	task_name: String;
	completed: boolean;
	due_date: String;
}

export default function Task(taskData: taskProps) {
	const [task, setTask] = useState<taskProps>(taskData);

	return (
		<div
			key={task.task_id}
			className='w-[99%] p-4 bg-gradient-to-r from-teal-900 to-teal-500 mb-2 rounded-lg flex items-center'
		>
			<div className='flex items-center gap-4'>
				<input
					type='checkbox'
					name={task.task_id.toString()}
					defaultChecked={task.completed}
					className='relative peer shrink-0 transition-all
          appearance-none size-5 border-1 border-zinc-500 rounded-sm bg-zinc-900
          mt-1
          checked:bg-gray-900'
					onClick={() => {
						setTask((task) => {
							return { ...task, completed: !task.completed };
						});
					}}
				/>

				<svg
					className='
            absolute transition-colors
            size-3 mt-1 ml-1
            hidden peer-checked:block z-0'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='none'
					pointerEvents='none'
					stroke='currentColor'
					strokeWidth='4'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<polyline points='20 6 9 17 4 12'></polyline>
				</svg>

				<div className='flex flex-col gap-0'>
					<h1
						className={`text-base ${
							task.completed ? 'text-zinc-900 line-through' : 'text-zinc-950'
						} font-semibold`}
					>
						{task.task_name}
					</h1>
					<time
						className='text-sm text-zinc-900 font-bold'
						suppressHydrationWarning
					>
						{task.due_date}
					</time>
				</div>
			</div>
		</div>
	);
}
