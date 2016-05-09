import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducerApp from './src/reducers/reducers';

let store = createStore(reducerApp);

let rootElement = document.getElementById('app');
ReactDOM.render(
    // Дочерний компонент должен быть обернуть в функцию
    // это баг в React 0.13.
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>,
    rootElement
);