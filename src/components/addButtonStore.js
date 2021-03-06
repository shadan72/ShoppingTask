import React from "react";
import Button from "react-bootstrap/Button";

export default function addButton({ buttonStore, storeBrand, category }) {
  const visibleStore = () => {
    storeBrand(true);
    buttonStore(false);
  };
  const visibleCategory = () => {
    category(true);
    buttonStore(false);
  };
  return (
    <div>
      <div>
        <Button variant="secondary" size="lg" onClick={() => visibleStore()}>
          Add Store
        </Button>
      </div>
      <div>
        <Button variant="secondary" size="lg" onClick={() => visibleCategory()}>
          Add Category
        </Button>
      </div>
    </div>
  );
}
