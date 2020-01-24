import { ADD_ARTICLE } from '../constants/action-type';

const forbiddenWords = ["spam", "money"];

export function forbiddenWordMiddleware({ dispatch, getState }) {
    return function (next) {
        return function (action) {
            if (action.type === ADD_ARTICLE) {
                const foundWord = forbiddenWords.filter(word => action.payload.title.includes(word));
                const oldArticles = getState().articles;
                const nextId = oldArticles.length + 1;
                const tempTitle = action.payload.title;
                const data = { title: tempTitle, id: nextId };
                action.payload = data;
                if (foundWord.length) {
                    return dispatch({ type: 'FOUND_BAD_WORD' });
                }
            }
            return next(action);
        };
    };
}