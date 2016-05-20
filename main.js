import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import App from './src/components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducerApp from './src/reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
)(createStore);

//let store = createStore(reducerApp);
const store = createStoreWithMiddleware(reducerApp);

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