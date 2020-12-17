import React from 'react'

export default function StoreDetail({store})
{
    return (
<div>

<h1 className="">{store.id}</h1>
<h1 className="">{store.name}</h1>
<img
  src={store.logo}
  alt={store.name}
/>

</div>
    )
}


