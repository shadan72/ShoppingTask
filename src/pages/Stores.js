import React, { useState } from "react";
import AddButtonStore from "../components/addButtonStore";
import Stores from "../components/addStores";
import { Link } from "react-router-dom";
import Category from "../components/Category";
export default function StoresPage() {
  const [storeBrand, setstoreBrand] = useState(false);
  const [button, setButton] = useState(true);
  const [category, setCategory] = useState(false);
  return (
    <div>
      <h1>This is stores</h1>
      {button && (
        <AddButtonStore
          buttonStore={setButton}
          storeBrand={setstoreBrand}
          category={setCategory}
        />
      )}
      {storeBrand && <Stores storeBrand={setstoreBrand} />}
      {category && <Category />}
    </div>
  );
}
