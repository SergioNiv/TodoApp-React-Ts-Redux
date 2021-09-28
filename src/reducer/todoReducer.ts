import { TodoAction, TodoState } from '../interfaces/interfaces';

const INITIAL_STATE: TodoState = {
	todos: JSON.parse(localStorage.getItem('todoRedux')!) || [],
};

export const todoReducer = (
	state: TodoState = INITIAL_STATE,
	action: TodoAction
) => {
	switch (action.type) {
		case 'Todo Add New':
			return {
				...state,
				todos: [...state.todos, action.payload],
			};

		case 'Toggle Todo':
			return {
				...state,
				todos: state.todos.map(({ ...todo }, i) => {
					if (state.todos[i] === state.todos[action.payload.idx]) {
						todo.toggleComplete = !todo.toggleComplete;
					}
					return todo;
				}),
			};

		case 'Delete Todo':
			state.todos.splice(action.payload.idx, 1); //Nota: este método modifica el array de origen
			return {
				...state,
				todos: [...state.todos],
			};
		default:
			return state;
	}
};
