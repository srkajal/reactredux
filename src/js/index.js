import store from './store/store';
import { addArticle } from './actions/addArticle';

window.store = store;
window.addArticle = addArticle;