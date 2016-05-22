import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'

import App from './src/components/App';
import reducerApp from './src/reducers/reducers';
import Posts from './src/components/posts/posts'

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
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/posts" component={Posts}/>
        </Router>
    </Provider>,
    rootElement
);
//<div>
//    <App />
//</div>