import axios, { AxiosResponse } from 'axios'; // 'AxiosResponse' es el tipo que espera las promesas de axios
import ITask from '../interfaces/ITask';

const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/tasks/', // De esta forma no tenemos que repetir la url en cada uno de los verbos HTTP
});

export const index = (): Promise<AxiosResponse<any>> => tasksApi.get('/');
export const show = (id: number): Promise<AxiosResponse<any>> => tasksApi.get('/' + id);
export const store = (task: ITask): Promise<AxiosResponse<any>> => tasksApi.post('/', task);   
export const destroy = (id: number): Promise<AxiosResponse<any>> => tasksApi.delete('/' + id);   
export const update = (id: number, task: ITask): Promise<AxiosResponse<any>> => tasksApi.put('/' + id + '/', task);   
