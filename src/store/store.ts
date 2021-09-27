import { combineReducers, createStore, Store } from 'redux';
import { DispatchType, TodoAction, TodoState } from '../interfaces/interfaces';
import { todoReducer } from '../reducer/todoReducer';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

const reducers = combineReducers({
	todoStore: todoReducer,
});
export const store: Store<TodoState, TodoAction> & {
	dispatch: DispatchType;
} = createStore(reducers, devToolsEnhancer({}));
