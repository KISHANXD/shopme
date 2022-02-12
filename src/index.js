
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchPosts } from './redux/actions'
import App from './App'
import Router from './routes';


//Dispatch the fetchPosts() before our root component renders
store.dispatch(fetchPosts())

ReactDOM.render(
    <Provider store={ store }>
        <Router />
    </Provider>, document.getElementById('root')
);