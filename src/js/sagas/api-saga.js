import { takeEvery, call, put } from 'redux-saga/effects';
import { DATA_LOADED, DATA_REQUESTED, API_ERRORED } from '../constants/action-type';

export default function* watcherSaga() {
    yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(getData);
        yield put({ type: DATA_LOADED, payload: payload });
    } catch (e) {
        put({ type: API_ERRORED, payload: e });
    }
}

function getData() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());
}