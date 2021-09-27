import { Provider } from 'react-redux';
import './App.css';
import { Todo } from './components/Todo';
import { store } from './store/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App-header App">
				<Todo />
			</div>
		</Provider>
	);
}

export default App;
