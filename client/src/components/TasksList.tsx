import { useEffect, useState } from 'react';
import { index } from '../api/tasks';
import { TaskCard } from './TaskCard';
import { ITask } from '../interfaces/tasks';

export const TasksList = () => {

	const [tasks, setTasks] = useState<ITask[]>([]);

	useEffect(() => {
		const loadTasks = async (): void => {
		    const res = await index();
		    setTasks(res.data);
		};
		loadTasks();
	}, []);

	return <div>
		{tasks.map((task, i) => (
			<TaskCard key={ i } task={ task } />
		))}
	</div>
};