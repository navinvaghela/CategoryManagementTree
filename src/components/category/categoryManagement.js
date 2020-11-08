import React from 'react';
import { connect }  from 'react-redux';
import Category from './category';
import { createNewCategory, saveCategory, removeCategory, editCategory } from './actions';
import './../../App.css';

class CategoryManagement extends React.Component {

  render = () => {
    return  (
      <div>
          <Category 
            showCategory={this.props.showCategory} 
            saveCategory={this.props.saveCategory}
            categoryList={this.props.categoryList}
            newcategoryList={this.props.newcategoryList}
            createNewCategory={this.props.createNewCategory}
            editCategory={this.props.editCategory}
            removeCategory={this.props.removeCategory}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    showCategory: state.category.showCategory,
    categoryList: state.category.categoryList,
    newcategoryList: state.category.newcategoryList,
    isEditShow: state.category.isEditShow
  }
};

const mapDispatchToProps = (dispatch) => ({
  createNewCategory: (id) => dispatch(createNewCategory(id)),
  editCategory: (data) => dispatch(editCategory(data)),
  removeCategory:  (id) => dispatch(removeCategory(id)),
  saveCategory: (data) => dispatch(saveCategory(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManagement);
