// import { fromJS } from 'immutable';
import {CREATE_CATEGORY, REMOVE_CATEGORY, SAVE_CATEGORY, EDIT_CATEGORY} from './constants';

const categoryInitialState = {
    categoryList: [],
    newcategoryList: [],
    showCategory: false,
    isEditShow: false
};

const categoryReducer = (state = categoryInitialState, action) => {
    
    switch(action.type) {
        case CREATE_CATEGORY:
            return {
                ...state,
                newcategoryList: addCategory(state.newcategoryList, action)
            };
        case EDIT_CATEGORY:
        return {
            ...state,
            newcategoryList: editCategory(state.newcategoryList,action)
        };

        case SAVE_CATEGORY:
            return {
                ...state,
                newcategoryList: saveCategory(state.newcategoryList,action)
            };
            
        case REMOVE_CATEGORY:
            return {
                ...state,
                newcategoryList: removeCategory(state.newcategoryList, action)
            };
        default: return state;
    }
};

// immutability helpers
function addCategory(prevCategoryArray, action) {
    let newCategory = prevCategoryArray.slice();
    newCategory.splice(action.data.id, 0, action.data)
    return newCategory;
}

function editCategory(array, action) {
    return array.map((item, index) => {
        if (index !== action.data.id) {
            return item
        }
        return {
        ...item,
        ...action.data
        }
    })
}

function removeCategory(array, action) {
    let newCategory = array.slice()
    newCategory.splice(action.categoryIndex, 1)
    return newCategory
}

function saveCategory(array, action) {
    return array.map((item, index) => {
        if (index !== action.data.id) {
            return item
        }
        return {
        ...item,
        ...action.data
        }
    })
}
export default categoryReducer;