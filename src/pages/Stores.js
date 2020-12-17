import React,{useState} from 'react'
import AddButtonStore from '../components/addButtonStore'
import Stores from '../components/addStores'
import { Link } from 'react-router-dom';
import Category from '../components/Category'
export default function StoresPage(){
   
    const [store, setStore] = useState(false);
    const [button, setButton] = useState(true);
    const [category, setCategory] = useState(false);
    return(
          
        <div>
         <h1>This is stores</h1>
         {button && (
            <AddButtonStore buttonStore={setButton} store={setStore} category={setCategory}/> 
         )}
            {store && (
            <Stores store={setStore} /> 
          )}
{category && (
            <Category /> 
         )}


        </div>


    )
}