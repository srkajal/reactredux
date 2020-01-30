import { ADD_ARTICLE, DATA_REQUESTED } from '../constants/action-type';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

/* export function getData() {
    return function (dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch(getRemoteArticle(json));
            });
    };
}

function getRemoteArticle(payload) {
    return { type: DATA_LOADED, payload }
}; */

export function getData() {
    return {type: DATA_REQUESTED}
}