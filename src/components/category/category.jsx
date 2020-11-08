import React, {useState} from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';
import './../../App.css';

const Category = ({newcategoryList, createNewCategory, saveCategory, editCategory, removeCategory}) => {
  const [cateName, setCategoryName]= useState('');
  const [cateId, setCateId]= useState(0);


  const handleAddNewCategory = (data) => {
    setCategoryName('');
    setCateId(cateId+1);
    createNewCategory(data)
  }

  const handleEditCategory = (data) => {
    newcategoryList.forEach((element) => {
      if(data.id === element.id){
        setCategoryName(element.title);
      }
    }); 
    
    editCategory(data);
  }

  
  const handleRemoveCategory = (id) => {
    removeCategory(id)
  }
  
  return (
    <Container className="col-6" style={{ marginTop: '50px' }}>
      <Form.Group>
        <Form.Row>
          <Form.Label column="md" md={3}> CREATE CATEGORY </Form.Label>
          <Button variant="success" onClick={()=>handleAddNewCategory({ id: cateId, title:"", categoryType:"parent", iscategoryTextbox: true} )} ><i className="pi pi-plus" ></i></Button>
        </Form.Row>
        <br />
        <ul>
          {
            newcategoryList.map((newItem, index) => (
              <li>
                {
                  newItem.iscategoryTextbox ? 
                    <Form.Row>
                      <Col md={4}>
                        <Form.Control type="text" placeholder="Category Name..." name="cateName" onChange={e => setCategoryName(e.target.value)} value={ cateName}/>
                      </Col>
                      <Col md={1}>  
                        <Button variant="success" onClick={() => saveCategory({id: index, title:cateName, categoryType:"parent", iscategoryTextbox: false})} ><i className="pi pi-check" ></i></Button>
                      </Col>
                      <Col md={1}>
                        <Button variant="danger" onClick={() => handleRemoveCategory(index)} id={newItem.id}><i className="pi pi-times" ></i></Button>
                      </Col> 
                    </Form.Row>
                    : 
                    <Form.Row>
                      <Col md={2}>
                        {newItem.title}
                      </Col>
                      <Col md={1}>  
                        <Button variant="success" onClick={()=>handleAddNewCategory({ id: cateId, title:"", categoryType:"child", iscategoryTextbox: true } )} ><i className="pi pi-plus" ></i></Button>
                      </Col>
                      <Col md={1}>
                        {/* <Button onClick={() => saveCategory({id: index, title:cateName, categoryType:"parent", iscategoryTextbox: true })}><i className="pi pi-pencil" ></i></Button> */}
                        <Button onClick={() => handleEditCategory({id: index, title:cateName, categoryType:"parent", iscategoryTextbox: true })}><i className="pi pi-pencil" ></i></Button>
                      </Col>
                      <Col md={1}>
                        <Button variant="danger" onClick={() => handleRemoveCategory(index)} id={newItem.id}><i className="pi pi-times" ></i></Button>
                      </Col> 
                    </Form.Row>
                  }
                <br />
              </li>
            ))
          }
        </ul> 
        <br />
      </Form.Group>
    </Container>
  );  
}

export default Category;
