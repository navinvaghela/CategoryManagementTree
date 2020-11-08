import { combineReducers }  from 'redux';

import categoryReducer from './components/category/categoryReducer';

const rootReducer = combineReducers({
  category: categoryReducer,
});

export default rootReducer;

