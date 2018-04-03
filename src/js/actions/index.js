import { ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE, SET_ARTICLE_TO_UPDATE } from '../constants/action-types';

export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});

export const removeArticle = id => ({
    type: REMOVE_ARTICLE,
    payload: id
});

export const updateArticle = article => ({
    type: UPDATE_ARTICLE,
    payload: article
});

export const setArticleToUpdate = article => ({
    type: SET_ARTICLE_TO_UPDATE,
    payload: article
})

