import { useForm, SubmitHandler } from 'react-hook-form'; // 'SubmitHandler' es el tipo de datos para los formularios que implementan react-hook-form
import { ITask } from '../interfaces/ITask';
import { store, destroy, update, show } from '../api/tasks';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast'; // Para mensajes tipo flash

export const TaskFormPage = () => {

	const navigate = useNavigate();
	const params = useParams();
	
	const { register, handleSubmit, formState: { errors }, setValue } = useForm<ITask>() // 'register' es para capturar los campos y especificar validaciones. 'handleSubmit' maneja los envíos de formularios. 'formState: { errors }' captura los errores de validación. 'setValue' es útil para cargar los valores de los campos en caso de entrar en el modo edición.

	const onSubmit: SubmitHandler<ITask> = handleSubmit(async data => {
		if (params.id) {
			await update(params.id, data);
			toast.success('Updated task', {
				position: 'botton-right',
				style: {background: '#101010', color: '#FFFFFFFF'}
			});
		} else {
			await store(data);
			toast.success('Created task', {
				position: 'botton-right',
				style: {background: '#101010', color: '#FFFFFFFF'}
			});
		}
		navigate('/tasks');
	});

	useEffect(() => {
		const loadTask = async () => {
			if (params.id) {
				const res = await show(params.id);
				setValue('title', res.data.title);	
				setValue('description', res.data.description);	
			}
		};
		loadTask();		
	}, []);

	return (
		<div>
			<form onSubmit={ onSubmit }>
				<input type='text' placeholder='Title' {...register('title', {required: true})} autoFocus /> 
				{ errors.title && <span>Title field is required</span>}
				<textarea row='3' placeholder='Description' {...register('description')}></textarea>
				<button>Save</button>
			</form>
			{ params.id && ( // Si existe el parámetro id en la url, entonces muestra el siguiente botón
				<button onClick={ async () => {
					const res = window.confirm('are you sure?');
					if (res) {
						await destroy(params.id);
						toast.success('Deleted task', {
							position: 'botton-right',
							style: {background: '#101010', color: '#FFFFFFFF'}
						});
						navigate('/tasks');
					}
				}
				}>Delete</button>
			) }	
					
		</div>
	);
};