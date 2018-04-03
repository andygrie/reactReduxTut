import { ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE, SET_ARTICLE_TO_UPDATE } from '../constants/action-types';

const initialState = {
    articles: [],
    articleToUpdate: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
        {
            let articles = state.articles.slice();
            let article = articles.find(article => article.id === action.payload.id);
            let newArticle;
            if(article === undefined)
                newArticle = action.payload;
            else
                article.title = action.payload.title;

            if(article === undefined)
                articles.push(newArticle);
            return {
                ...state, articles: articles
            };
        }
        case REMOVE_ARTICLE:
            return {
                ...state, articles: state.articles.slice().filter(article => article.id !== action.payload)
            };
        case UPDATE_ARTICLE:
            let articles = state.articles.slice();
            articles = articles.map(article => {
                if(article.id === action.payload.id)
                    article.title = action.payload.title;
                return article;
            })
            return {
                ...state, articles: articles
            };
        case SET_ARTICLE_TO_UPDATE:
            return {
                ...state, articles: state.articles.slice(), articleToUpdate : action.payload
            }
        default:
            return state;
    }
};
export default rootReducer;
