import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, TodoState } from '../interfaces/interfaces';
import { TodoAddNew } from './TodoAddNew';
import { TodoList } from './TodoList';

interface RootState {
	todoStore: TodoState;
}

export const Todo = () => {
	const dispatch: DispatchType = useDispatch();

	const { todos } = useSelector((state: RootState) => state.todoStore);

	const countToggle = todos.filter(
		(todo) => todo.toggleComplete === true
	).length;

	return (
		<div>
			<h1>Todo App with Redux</h1>
			<span>
				{countToggle} de {todos.length} tareas completadas
			</span>
			<hr />
			<TodoAddNew dispatch={dispatch} />
			<TodoList dispatch={dispatch} todos={todos} />
		</div>
	);
};
