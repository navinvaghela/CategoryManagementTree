
import {
    SHOW_CATEGORY, 
    CREATE_CATEGORY, 
    REMOVE_CATEGORY, 
    SAVE_CATEGORY,
    EDIT_CATEGORY
} from './constants';

export const showCategory = () => ({
    type: SHOW_CATEGORY,
});

export const createNewCategory = (data) => ({
    type: CREATE_CATEGORY,
    data
});

export const editCategory = (data) => ({
    type: EDIT_CATEGORY,
    data
});

export const saveCategory = (data) => ({
    type: SAVE_CATEGORY,
    data
});

export const removeCategory = (categoryIndex) => ({
    type: REMOVE_CATEGORY,
    categoryIndex 
});