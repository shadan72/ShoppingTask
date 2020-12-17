import React from 'react'
import StoreDetail from '../components/storeDetail'
import { Link } from 'react-router-dom';
export default function AllStores(){
    const storesData=[
        {
         id:0, name:'Nike', logo:'https://i.pinimg.com/originals/4d/96/2d/4d962dee72fa76f023d411e20d30690c.jpg',
        },
        {
         id:1, name:'Adidas', logo:'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
         
        },
        {
          id:2, name:'Adidas', logo:'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
          
         }
     ]
    return(
        <div>
            
<div className="grid justify-center mb-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {storesData.map((stores) => (
          <Link key={stores.id} to={'stores/' + stores.id}>
            <div
              key={stores.id}
              className="flex items-center justify-center gradient-orange wh  rounded-md"
            >
                <StoreDetail store={stores}/>
            </div>
          </Link>
        ))}
      </div>
    </div>
        </div>
    )
}


