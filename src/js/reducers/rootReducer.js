import { ADD_ARTICLE, DATA_LOADED } from '../constants/action-type';

const initialState = { articles: [{ title: 'React Redux Tutorial for Beginners', id: 1 }], remoteArticles: [] };

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, { articles: state.articles.concat(action.payload) });
    }

    if(action.type === DATA_LOADED) {
        return Object.assign({}, state, {remoteArticles: state.remoteArticles.concat(action.payload)});
    }

    return state;
}

export default rootReducer;