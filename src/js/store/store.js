import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { forbiddenWordMiddleware } from '../middleware/forbiddenWordMiddleware';

const store = createStore(rootReducer, applyMiddleware(forbiddenWordMiddleware));

export default store;
