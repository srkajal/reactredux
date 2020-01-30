import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { forbiddenWordMiddleware } from '../middleware/forbiddenWordMiddleware';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import apiSaga from '../sagas/api-saga';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialiseSagaMiddleware =  createSagaMiddleware();

//const store = createStore(rootReducer, storeEnhancers(applyMiddleware(forbiddenWordMiddleware, thunk)));

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(forbiddenWordMiddleware, initialiseSagaMiddleware)));

initialiseSagaMiddleware.run(apiSaga);

export default store;
