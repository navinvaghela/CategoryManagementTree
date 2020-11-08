import React from 'react';
import { Provider }  from 'react-redux';
import CategoryManagement from './components/category/categoryManagement'
import './App.css';
import store from './store';

function App() {
  return  (
    <div>
      <Provider store={store} >
        <CategoryManagement />
      </Provider>
    </div>
  )
}

export default App;
