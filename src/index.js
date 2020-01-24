import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './js/components/App';
import store from './js/store/store';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
