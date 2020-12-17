import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Product from "../components/Product";
export default function Category() {
  const [category, setCategory] = useState();
  const [product, setProduct] = useState(true);
  const visibleHide = () => {
    setCategory(false);
    setProduct(true);
  };
  return (
    <div>
      {category && (
        <Form className="w-25 p-3 block-example border border-secondary rounded mb-0">
          <Form.Group controlId="CategoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Category Name"
              className="w-100 p-3"
            />
          </Form.Group>
          <Form>
            <Form.Group>
              <Form.File id="AddImage" label="Add Image" />
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="primary" onClick={() => visibleHide()}>
            add Product
          </Button>
        </Form>
      )}
      {product && <Product product={setCategory} />}
    </div>
  );
}
