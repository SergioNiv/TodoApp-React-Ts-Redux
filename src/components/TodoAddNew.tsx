import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { todoAdd } from '../actions/todo';
import { DispatchType } from '../interfaces/interfaces';

type Args = {
	dispatch: DispatchType;
};

export const TodoAddNew = ({ dispatch }: Args) => {
	const [formValue, setFormValue] = useState('');

	const todoRef = useRef<HTMLInputElement>(null); //guardar el foco del input como  referencia

	const handleOnchange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setFormValue(target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (formValue.trim().length > 0) {
			dispatch(todoAdd({ name: formValue, toggleComplete: false }));
			setFormValue('');
			todoRef.current?.focus();
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Escribe tu tarea:</label>
				<input
					type="text"
					placeholder="Tarea"
					className="form form-control mt-2 "
					onChange={handleOnchange}
					value={formValue}
					autoFocus
					ref={todoRef}
				/>

				<button type="submit" className="btn btn-success mt-4 ">
					Añadir tarea
				</button>
			</form>
		</div>
	);
};
