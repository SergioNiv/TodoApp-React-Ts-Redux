export interface Todo {
	name: string;
	toggleComplete: boolean;
}

export type TodoState = {
	todos: Todo[];
};

export type TodoAction =
	| { type: 'Todo Add New'; payload: Todo }
	| { type: 'Toggle Todo'; payload: { idx: number } }
	| { type: 'Delete Todo'; payload: { idx: number } };

export type DispatchType = (args: TodoAction) => TodoAction;
