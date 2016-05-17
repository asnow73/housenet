import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import App from './src/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducerApp from './src/reducers/reducers';
import { getConfirmLogin } from './src/actions/actions';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
)(createStore);

//let store = createStore(reducerApp);
const store = createStoreWithMiddleware(reducerApp);

//store.dispatch(selectReddit('reactjs'));
store.dispatch(getConfirmLogin('al@al.com', '123456'));
console.dir(store.getState())
setTimeout(function(){
    alert("aaaa");
    console.dir(store.getState())
}, 4000);
//.then(() =>
//    console.log(store.getState())
//);

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