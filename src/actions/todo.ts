import { Todo, TodoAction } from '../interfaces/interfaces';

export const todoAdd = (todo: Todo): TodoAction => ({
	type: 'Todo Add New',
	payload: todo,
});

export const toggleTodo = (idx: number): TodoAction => ({
	type: 'Toggle Todo',
	payload: { idx },
});

export const deleteTodo = (idx: number): TodoAction => ({
	type: 'Delete Todo',
	payload: { idx },
});
