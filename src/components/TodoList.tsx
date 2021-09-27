import { deleteTodo, toggleTodo } from '../actions/todo';
import { DispatchType, Todo } from '../interfaces/interfaces';

type Args = {
	dispatch: DispatchType;
	todos: Todo[];
};

export const TodoList = ({ dispatch, todos }: Args) => {
	localStorage.setItem('todoRedux', JSON.stringify(todos));

	return (
		<div className="mt-5" style={{ textAlign: 'left' }}>
			<span style={{ fontSize: '1rem', display: 'block' }} className="mb-3">
				Presiona sobre la tarea para marcarla como completada
			</span>
			<ol>
				{todos.map((todo, idx) => (
					<li
						key={idx}
						style={{
							cursor: 'pointer',
							textDecoration: todo.toggleComplete ? 'line-through' : '',
						}}
						className="mt-2 App-link"
					>
						<button
							className="btn btn-danger me-3"
							onClick={() => dispatch(deleteTodo(idx))}
						>
							Borrar
						</button>
						<span onClick={() => dispatch(toggleTodo(idx))}>{todo.name}</span>
					</li>
				))}
			</ol>
		</div>
	);
};
