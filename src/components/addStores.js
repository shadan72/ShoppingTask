import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Category from "../components/Category";
export default function AddStores() {
  const [category, setCategory] = useState(false);
  const [storeForm, setStoreForm] = useState(true);
  const visibleHide = () => {
    setCategory(true);
    setStoreForm(false);
  };
  return (
    <div>
      {storeForm && (
        <Form className="w-25 p-3 block-example border border-secondary rounded mb-0">
          <Form.Group controlId="StoreName">
            <Form.Label>Store Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Store Name"
              className="w-100 p-3"
            />
          </Form.Group>
          <Form>
            <Form.Group>
              <Form.File id="AddLogo" label="Add Logo" />
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="primary" onClick={() => visibleHide()}>
            add category
          </Button>
        </Form>
      )}
      {category && <Category category={setCategory} />}
    </div>
  );
}
