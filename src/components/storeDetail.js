import React from 'react'
import {Button,Card} from 'react-bootstrap'
export default function StoreDetail({storeBrand})
{
    return (
<div>
<div>
    <Card style={{ width: '18rem' }}>
        <Card.Img width="200px" height="200px" src={storeBrand.logo} alt={storeBrand.name} />
      <Card.Body>
        <Card.Title>{storeBrand.name}</Card.Title>
        <Button>More details</Button>
      </Card.Body>
    </Card>
  </div>
</div>
    )
}


