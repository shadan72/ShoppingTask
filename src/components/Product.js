import React from 'react'
import {Button,Form,InputGroup,FormControl} from 'react-bootstrap'

export default function Category(){
 
    return(

        <div>
          
  <Form className="w-25 p-3 block-example border border-secondary rounded mb-0">
  <Form.Group controlId="ProductName">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Product Name" className="w-100 p-3"/>
  </Form.Group>
  <Form.Label>Price</Form.Label>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Append>
      <InputGroup.Text>.00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
  <Form>
  <Form.Group>
    <Form.File id="AddImage" label="Add Image" />
  </Form.Group>
  <InputGroup>
    <FormControl as="textarea" aria-label="Product Description" />
  </InputGroup>
</Form>
  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
          
           
        </div>


    )
}