import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

export default function addButton({buttonStore,store,category}){

    const visibleStore = () => {
        store(true);
        buttonStore(false);
    };
    const visibleCategory = () => {
        category(true);
        buttonStore(false);
    };
    return (
  <div>
        <div>
         <Button variant="secondary" size="lg" onClick={()=>visibleStore()}>Add Store</Button>
           
         </div>
         <div>
         <Button variant="secondary" size="lg" onClick={()=>visibleCategory()}>Add Category</Button>
           
         </div>
     </div>    
    )
}